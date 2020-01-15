import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class GameScreen extends React.Component {

  render() {
    return(
      <View>
        <Text style={styles.title}>GameScreen</Text>
        <View style={styles.button}><Button title='Rock     🤘' /></View>
        <View style={styles.button}><Button title='Paper     🧻' /></View>
        <View style={styles.button}><Button title='Scissor     ✂️' /></View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  button: {
    marginVertical: '5%',
  }
})

export default GameScreen;
