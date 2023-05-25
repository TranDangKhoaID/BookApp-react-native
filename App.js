import * as React from 'react';
import { View, Text } from 'react-native';

import DrawerHome from './screens/DrawerScreens';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import StackNavi from './screens/StackLogin';
import Book from './screens/Book';
import HomePage from './screens/HomePage';

export default function App(){
  return <DrawerHome />
}