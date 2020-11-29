import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const App = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    drawerStyle={{
      backgroundColor: '#171717',
    }}
    drawerContentOptions={{
      activeBackgroundColor: '#00b94a',
      inactiveBackgroundColor: '#000',
      activeTintColor: '#FFF',
      inactiveTintColor: '#DDD',
      labelStyle: {
        fontWeight: 'bold',
        fontFamily: 'RobotoSlab-Medium',
        fontSize: 18,
      },
      itemStyle: {
        marginVertical: 6,
      },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="New" component={New} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
