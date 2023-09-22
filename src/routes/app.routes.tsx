/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from '../screems/main';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        name="Word List"
        component={App}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
        name="History"
        component={App}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <Ionicons name="heart-outline" size={22} color={color} />
          ),
        }}
        name="Favorites"
        component={App}
      />
    </Tab.Navigator>
  );
}
