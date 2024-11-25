import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import TennisHomeScreen from '../screens/TennisHomeScreen';
import TennisDetailsScreen from '../screens/TennisDetailsScreen';

const Stack = createStackNavigator();

const TennisStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2f95dc',
          shadowColor: 'transparent', // Remove shadow on iOS
          elevation: 0, // Remove shadow on Android
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center', // Center the header title
        ...TransitionPresets.FadeFromBottomAndroid, // Add fade transition
      }}
    >
      <Stack.Screen
        name="TennisHome"
        component={TennisHomeScreen}
        options={{ title: 'Tennis Fixtures' }}
      />
      <Stack.Screen
        name="TennisDetails"
        component={TennisDetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default TennisStack;