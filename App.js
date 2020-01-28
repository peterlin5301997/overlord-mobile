import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

export default function App() {

  const [currentScreen, setScreen] = useState('HomeScreen');
  const [data, setData] = useState({});

  const play = () => {
    setScreen('GameScreen');
  }

  const end = (data) => {
    setScreen('EndScreen');
    setData(data);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/pokemon-background.jpg')} style={styles.background}>
        {
          currentScreen == 'HomeScreen' ? <HomeScreen play={play} /> :
          currentScreen == 'GameScreen' ? <GameScreen end={end} /> :
          currentScreen == 'EndScreen' ? <EndScreen data={data} /> : null
        }
      </ImageBackground>
    </View>
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
