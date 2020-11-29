import React, { useState, useCallback } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection.js';

import {
  Container,
  Title,
  Logo,
  Input,
  BackButton,
  BackButtonText,
} from './styles';
import LogoImg from '../../assets/Logo.png';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);
  const [loadingSignUp, setLoadingSingUp] = useState(false);

  const navigation = useNavigation();

  const handlePassword = useCallback((text: string) => {
    setPassword(text);
    setHidePassword(true);
  }, []);

  const handleRegister = useCallback(async () => {
    setLoadingSingUp(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        const { uid }: any = value.user;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            balance: 0,
            name,
          })
          .then(() => {
            setLoadingSingUp(false);
            navigation.navigate('SignIn');
          });
      })
      .catch(error => {
        Alert.alert(error.code);
        setLoadingSingUp(false);
      });
  }, [navigation, name, email, password]);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        >
          <Container>
            <Logo source={LogoImg} style={{ resizeMode: 'contain' }} />

            <View>
              <Title>Cadastre-se!</Title>
            </View>

            <Input
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Nome"
              returnKeyType="next"
              value={name}
              onChangeText={text => setName(text)}
            />

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="E-mail"
              returnKeyType="next"
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha"
              returnKeyType="send"
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={text => handlePassword(text)}
              onSubmitEditing={handleRegister}
            />

            <Button onPress={handleRegister}>
              {loadingSignUp ? (
                <ActivityIndicator size={20} color="#FFF" />
              ) : (
                <BackButtonText style={{ fontSize: 22 }}>
                  Cadastrar
                </BackButtonText>
              )}
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackButton onPress={handleBack}>
        <BackButtonText>Voltar</BackButtonText>
      </BackButton>
    </>
  );
};

export default SignUp;
