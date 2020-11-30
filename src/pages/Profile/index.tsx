import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, UserNameText } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { useAuth } from '../../context/auth';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Content>
        <UserNameText>{user && user.name}</UserNameText>
        <Button onPress={() => navigation.navigate('New')}>
          Registrar transação
        </Button>
        <Button
          style={{ backgroundColor: '#c62c36' }}
          onPress={() => signOut()}
        >
          Sair
        </Button>
      </Content>
    </Container>
  );
};

export default Profile;
