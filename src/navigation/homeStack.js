import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import * as React from 'react';

import HomePage from '../components/HomePage';
import SerieDetails from '../components/SerieDetails';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerBackTitle: false,
        headerStyle: {
          backgroundColor: '#E50914',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: 'My app', headerShown: false }}
      />

      <Stack.Screen
        name="SerieDetails"
        component={SerieDetails}
        options={{ title: 'Info' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
