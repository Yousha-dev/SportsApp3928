import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import CricketHomeScreen from '../screens/CricketHomeScreen';
import CricketDetailsScreen from '../screens/CricketDetailsScreen';

const Stack = createStackNavigator();

const CricketStack = () => {
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
        name="CricketHome"
        component={CricketHomeScreen}
        options={{ title: 'Cricket Fixtures' }}
      />
      <Stack.Screen
        name="CricketDetails"
        component={CricketDetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default CricketStack;