import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // Splash duration
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../images/background.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>SportsApp3928</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent background
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0a0463',
  },
});

export default SplashScreen;
