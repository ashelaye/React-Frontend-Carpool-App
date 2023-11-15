import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/components/Home.js';
import Profile from './src/components/Profile.js';
import Rewards from './src/components/Rewards.js';
import Schedule from './src/components/Schedule.js';
import styles from './src/style.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="Rewards"
          component={Rewards} />
        <Stack.Screen
          name="Profile"
          component={Profile} />
        <Stack.Screen
          name="Schedule"
          component={Schedule} />
      </Stack.Navigator>
  );
}

function ScheduleStack() {
  return (
    <Stack.Navigator
      initialRouteName="Schedule"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home} />
      <Stack.Screen
        name="Rewards"
        component={Rewards} />
     <Stack.Screen
        name="Profile"
        component={Profile} />
     <Stack.Screen
        name="Schedule"
        component={Schedule} />
    </Stack.Navigator>
  );
}

function RewardsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Rewards"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Rewards"
        component={Rewards} />
      <Stack.Screen
        name="Schedule"
        component={Schedule} />
     <Stack.Screen
        name="Profile"
        component={Profile} />
     <Stack.Screen
        name="Home"
        component={Home} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Schedule"
        component={Schedule} />
      <Stack.Screen
        name="Rewards"
        component={Rewards} />
     <Stack.Screen
        name="Profile"
        component={Profile} />
     <Stack.Screen
        name="Home"
        component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#88d19b' },
          headerTintColor: '#fff',
          // headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'ScheduleStack') {
                iconName = focused
                  ? 'calendar-month'
                  : 'calendar-month-outline';
            } else if (route.name === 'ProfileStack') {
                iconName = focused
                  ? 'account-settings'
                  : 'account-settings-outline';
            } else if (route.name === 'RewardsStack') {
                iconName = focused
                  ? 'gift'
                  : 'gift-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Welcome Back',
          }}  />
        <Tab.Screen
          name="ScheduleStack"
          component={ScheduleStack}
          options={{
            tabBarLabel: 'Schedule',
            title: 'Schedule'
          }} />
           <Tab.Screen
          name="RewardsStack"
          component={RewardsStack}
          options={{
            tabBarLabel: 'Rewards',
            title: 'Rewards'
          }} />
           <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            title: 'Profile'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
