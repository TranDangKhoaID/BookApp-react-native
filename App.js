import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SinhNhat from './screens/SinhNhat'
import HomePage from './screens/HomePage';
import Profile from './screens/Profile';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="SinhNhat" component={SinhNhat} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
