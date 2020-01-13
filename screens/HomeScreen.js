import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return(
      <View style={styles.screen}>
        <Text style={styles.title}>OVERLORD</Text>
        <Text style={styles.subtitle}>An Icebreaker Game</Text>
        <View style={styles.button}><Button title="Login" onPress={this.props.login} /></View>
        <View style={styles.button}><Button title="Register" onPress={() => console.log('register button pressed')} /></View>
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
  },
  button: {
    width: 150,
    margin: '1%',
  }
})

export default HomeScreen;
