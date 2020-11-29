import React, { useState, useCallback } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Logo,
  Input,
  SignUpButton,
  SignUpButtonText,
} from './styles';
import LogoImg from '../../assets/Logo.png';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);
  const navigation = useNavigation();

  const handlePassword = useCallback((text: string) => {
    setPassword(text);
    setHidePassword(true);
  }, []);

  const handleLogin = useCallback(() => {
    Alert.alert(`Teste`, `Teste`);
  }, []);

  const handleSignUp = useCallback(() => {
    navigation.navigate('SignUp');
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
              <Title>Faça seu login!</Title>
            </View>
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
              secureTextEntry={hidePassword}
              placeholder="Senha"
              returnKeyType="send"
              value={password}
              onChangeText={text => handlePassword(text)}
            />
            <Button onPress={handleLogin}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <SignUpButton onPress={handleSignUp}>
        <SignUpButtonText>Cadastre-se</SignUpButtonText>
      </SignUpButton>
    </>
  );
};

export default SignIn;
