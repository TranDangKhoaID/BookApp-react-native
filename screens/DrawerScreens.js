import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackHome from './StackHome';
import ProfileScreen from './Profile';
import SinhNhat from './SinhNhat';
import CustomDrawer from '../componets/CustomDrawer';

import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
      screenOptions={{
        drawerActiveBackgroundColor: '#309CFF',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle:{
          fontSize: 15
        }
      }}
    >
      <Drawer.Screen name="Trang chủ" component={StackHome} options={{
        headerShown: false,
        drawerIcon: () =>{
          <Ionicons name="home-outline" size={30} color="#666"/>
        }
      }}/>
      <Drawer.Screen name="Thông Tin" component={ProfileScreen} />
      <Drawer.Screen name="Sinh Nhật" component={SinhNhat} />
    </Drawer.Navigator>
  );
}

export default function DrawerHome() {
  return (

      <DrawerNavigator />
 
  );
}
