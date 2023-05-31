import * as React from 'react';
import { View, Text } from 'react-native';

import DrawerHome from './screens/DrawerScreens';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import StackNavi from './screens/StackLogin';
import HomePage from './screens/HomePage';
import StackHome from './screens/StackHome';
import BookScreen from './screens/Book';
import ChaptersScreen from './screens/Chapters';
import DetailChapter from './screens/DetailChapter';


export default function App(){
  return <DrawerHome />
}