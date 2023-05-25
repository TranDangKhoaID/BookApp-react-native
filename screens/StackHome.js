import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import BookScreen from './Book';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  );
}


export default function StackHome() {
  return (
      <StackNavigator />
  );
}
