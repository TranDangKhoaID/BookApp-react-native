import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import BookScreen from './Book';
import ChaptersScreen from './Chapters';
import DetailChapter from './DetailChapter';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Chapters" component={ChaptersScreen} />
      <Stack.Screen name="DetailChapter" component={DetailChapter} />
    </Stack.Navigator>
  );
};


export default function StackHome() {
  return (
      <StackNavigator />
  );
}
