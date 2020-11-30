import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection.js';

import Header from '../../components/Header';
import { useAuth } from '../../context/auth';
import { Container, UserInfoContainer, UserName, UserBalance } from './styles';
import formatPrice from '../../utils/formatValue';

const Home: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const { user } = useAuth();

  const uid = user ? user.uid : '';

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref('users')
        .child(uid)
        .on('value', snapshot => {
          setBalance(snapshot.val().balance);
        });
    }

    loadList();
  }, []);

  return (
    <Container>
      <Header />

      <UserInfoContainer>
        <UserName>{user?.name}</UserName>
        <UserBalance>{formatPrice(balance)}</UserBalance>
      </UserInfoContainer>
    </Container>
  );
};

export default Home;
