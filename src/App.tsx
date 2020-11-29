import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { AuthProvider } from './context/auth';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" translucent hidden />
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: '#171717' }}>
        <Routes />
      </View>
    </AuthProvider>
  </NavigationContainer>
);

export default App;
