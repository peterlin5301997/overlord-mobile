import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {

  const [currentScreen, setScreen] = useState('HomeScreen');

  const login = () => {
    setScreen('LoginScreen');
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <ImageBackground source={require('./images/pokemon-background.jpg')} style={styles.background}>
          {
            currentScreen == 'HomeScreen' ? <HomeScreen login={login} /> :
            currentScreen == 'LoginScreen' ? <LoginScreen /> : null
          }
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
