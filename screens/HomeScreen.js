import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return(
      <View style={styles.screen}>
        <Text style={styles.title}>OVERLORD</Text>
        <Text style={styles.subtitle}>An Icebreaker Game</Text>
        <Button title="Login" />
        <Button title="Register" />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 25,
  }
})

export default Home;
