import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/pokemon-background.jpg')} style={styles.background}>
        <HomeScreen />
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
