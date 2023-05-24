import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import LoginScreen from './Login';
import RegisterScreen from './Register';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Sign in',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default function StackNavi() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
