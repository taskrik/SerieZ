import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import HomePage from '../components/HomePage';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: 'My app', headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
