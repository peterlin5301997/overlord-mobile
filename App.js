import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [currentScreen, setScreen] = useState('HomeScreen');

  const play = () => {
    setScreen('GameScreen');
  }

  const end = () => {
    setScreen('EndScreen')
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <ImageBackground source={require('./images/pokemon-background.jpg')} style={styles.background}>
          {
            currentScreen == 'HomeScreen' ? <HomeScreen play={play} /> :
            currentScreen == 'GameScreen' ? <GameScreen end={end} /> : null
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
