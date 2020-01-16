import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class GameScreen extends React.Component {

  state = {
    playerChoice: '',
    cpuChoice: '',
  }

  handlePress = (playerChoice) => {
    const choices = ['Rock','Paper','Scissor']
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    this.setState({ cpuChoice, playerChoice })

    let result = playerChoice == cpuChoice ? 'TIE' :
    playerChoice == 'Rock' && cpuChoice == 'Paper' ? 'YOU LOSE' :
    playerChoice == 'Rock' && cpuChoice == 'Scissor' ? 'YOU WIN' :
    playerChoice == 'Paper' && cpuChoice == 'Rock' ? 'YOU WIN' :
    playerChoice == 'Paper' && cpuChoice == 'Scissor' ? 'YOU LOSE' :
    playerChoice == 'Scissor' && cpuChoice == 'Paper' ? 'YOU WIN' :
    playerChoice == 'Scissor' && cpuChoice == 'Rock' ? 'YOU LOSE' : null

    // console.log(result)
  }

  render() {
    // console.log(this.state)
    return(
      <View>
        <Text style={styles.title}>GameScreen</Text>
        <View style={styles.button}><Button onPress={() => this.handlePress('Rock')} title='Rock     🤘' /></View>
        <View style={styles.button}><Button onPress={() => this.handlePress('Paper')} title='Paper     🧻' /></View>
        <View style={styles.button}><Button onPress={() => this.handlePress('Scissor')} title='Scissor     ✂️' /></View>
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
