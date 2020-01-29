import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class RuleScreen extends React.Component {

  render() {
    return(
      <View style={styles.screen}>
        <Text style={styles.title}>Game Rules: </Text>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Evolution Route: </Text>
          <Text style={styles.subtitle}>Egg >> Chicken >> Raptor >> Overlord</Text>
          <Text style={styles.subtitle}>1. You start out as an Egg.</Text>
          <Text style={styles.subtitle}>2. To evolve, you need to win a game of "rock, paper, scissor".</Text>
          <Text style={styles.subtitle}>3. If you lose as an Overlord, you revert back to an Egg.</Text>
          <Text style={styles.subtitle}>4. There are 10 rounds.</Text>
          <Text style={styles.subtitle}>5. HAVE FUN!</Text>
        </View>
        <View style={styles.button}><Button color='green' onPress={this.props.play} title='Play Game' /></View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%'
  },
  container: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10
  },
  title: {
    fontSize: 25,
    marginVertical: 10
  },
  subtitle: {
    fontSize: 19,
    marginVertical: 5
  },
  button: {
    width: 200,
    marginVertical: 5
  }
})

export default RuleScreen;
