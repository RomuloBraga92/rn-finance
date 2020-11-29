import React from 'react';
import { Text, View } from 'react-native';

import Header from '../../components/Header';
import { useAuth } from '../../context/auth';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#171717',
      }}
    >
      <Header />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
