import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { View, Image, Text, Alert } from 'react-native';

import LogoImg from '../../assets/Logo.png';
import { useAuth } from '../../context/auth';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const { signOut } = useAuth();
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}
      >
        <Image
          source={LogoImg}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: '#FFF',
            fontSize: 18,
            marginTop: 5,
            fontFamily: 'RobotoSlab-Regular',
            marginBottom: 15,
          }}
        >
          Bem-vindo
        </Text>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sair do app"
        inactiveBackgroundColor="#c62c36"
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
