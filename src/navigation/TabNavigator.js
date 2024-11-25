import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Animated } from 'react-native';
import CricketStack from './CricketStack';
import TennisStack from './TennisStack';

const cricketIcon = require('../icons/cricket.png');
const tennisIcon = require('../icons/tennis.png');
const Tab = createBottomTabNavigator();

const tabBarIcon = ({ route }) => ({ focused, color, size }) => {
  let iconSource;
  if (route.name === 'Cricket') {
    iconSource = cricketIcon;
  } else if (route.name === 'Tennis') {
    iconSource = tennisIcon;
  }
  return (
    <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
      <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />
    </Animated.View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: tabBarIcon({ route }),
        headerShown: false, // Hide the header
      })}
      tabBarOptions={{
        activeTintColor: '#2f95dc',
        inactiveTintColor: '#ccc',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 10,
        },
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Cricket" component={CricketStack} />
      <Tab.Screen name="Tennis" component={TennisStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;