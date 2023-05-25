import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackHome from './StackHome';
import ProfileScreen from './Profile';
import SinhNhat from './SinhNhat';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Trang chủ" component={StackHome}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SinhNhat" component={SinhNhat} />
    </Drawer.Navigator>
  );
}

export default function DrawerHome() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
