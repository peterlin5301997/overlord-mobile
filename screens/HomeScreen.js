import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {

  render() {
    return(
      <View style={styles.screen}>
        <Text style={styles.title}>OVERLORD</Text>
        <Text style={styles.subtitle}>An Icebreaker Game</Text>
        <View style={styles.button}><Button color='green' title="Play" onPress={this.props.play} /></View>
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
    width: 200,
    marginVertical: '5%',
  }
})

export default HomeScreen;
