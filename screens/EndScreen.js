import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class EndScreen extends React.Component {

  endgameMessage =
    (this.props.evolution === "Egg") ? <Text>Better luck next time!</Text> :
    (this.props.evolution === "Chicken") ? <Text>You can do better!</Text> :
    (this.props.evolution === "Raptor") ? <Text>So close! You almost became an Overlord!</Text> :
    <Text>Wow! You became the Overlord! You're really good at this game!</Text>

  render() {
    return(
      <View style={styles.screen}>
        <Text style={styles.title}>Game Completed!</Text>
        <Text style={styles.subtitle}>You have completed 10 rounds and reached the end of the game.</Text>
        <Text style={styles.subtitle}>Final Result: { this.props.data.evolution }</Text>
        <View style={styles.button}><Button title='Play Again'/></View>
        <View style={styles.button}><Button title='Exit'/></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  title: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    marginVertical: '5%',
    width: 200
  },
})

export default EndScreen;
