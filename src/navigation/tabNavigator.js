import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Favorites from '../components/Favorites';
import HomeStack from './homeStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={HomeStack}
      tabBarOptions={{
        activeTintColor: '#E50914',
        labelStyle: {
          fontSize: 14,
          fontWeight: '700',
        },
        style: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        backBehavior="initialRoute"
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon size={30} color={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="MyFavorites"
        component={Favorites}
        options={{
          tabBarLabel: 'MySeries',
          tabBarIcon: ({ color }) => (
            <Icon size={30} color={color} name="favorite" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
