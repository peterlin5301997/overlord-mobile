import React from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';

class GameScreen extends React.Component {

  state = {
    playerChoice: '',
    cpuChoice: '',
    result: '',
    message: '',
    evolution: 'EGG',
    modalVisible: false,
    round: 1,
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
    if (this.state.round > 1) {
      this.props.end(this.state)
    }
  }

  evolve = () => {
    if (this.state.evolution == 'EGG') {
      this.setState({ evolution: 'CHICKEN', message: 'You evolved into a CHICKEN!' })
    } else if (this.state.evolution == 'CHICKEN') {
      this.setState({ evolution: 'RAPTOR', message: 'You evolved into a RAPTOR!' })
    } else if (this.state.evolution == 'RAPTOR') {
      this.setState({ evolution: 'OVERLORD', message: 'You evolved into an OVERLORD!' })
    }
  }

  handlePress = (playerChoice) => {
    const choices = ['Rock','Paper','Scissor']
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    this.setState({ cpuChoice, playerChoice })

    let result = playerChoice == cpuChoice ? 'YOU TIE' :
    playerChoice == 'Rock' && cpuChoice == 'Paper' ? 'YOU LOSE' :
    playerChoice == 'Rock' && cpuChoice == 'Scissor' ? 'YOU WIN' :
    playerChoice == 'Paper' && cpuChoice == 'Rock' ? 'YOU WIN' :
    playerChoice == 'Paper' && cpuChoice == 'Scissor' ? 'YOU LOSE' :
    playerChoice == 'Scissor' && cpuChoice == 'Paper' ? 'YOU WIN' :
    playerChoice == 'Scissor' && cpuChoice == 'Rock' ? 'YOU LOSE' : null

    if (result == 'YOU WIN') {
      this.evolve()
    } else if (result == 'YOU LOSE' && this.state.evolution == 'OVERLORD') {
      this.setState({ evolution: 'EGG', message: 'You turned back into an EGG!' })
    } else {
      this.setState({ message: `You stayed as a(n) ${this.state.evolution}` })
    }

    this.setState({ result, round: this.state.round + 1 })
    this.openModal()
  }

  render() {
    // console.log(this.state)
    return(
      <View>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={ this.closeModal }
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>{ this.state.result }</Text>
              <Text style={styles.subtitle}>{ this.state.message }</Text>
              <Text style={styles.subtitle}>YOU chose { this.state.playerChoice }</Text>
              <Text style={styles.subtitle}>CPU chose { this.state.cpuChoice }</Text>
              <View style={styles.button}><Button onPress={ this.closeModal } title='Okay' /></View>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Round {this.state.round}</Text>
        <View style={styles.button}><Button onPress={() => this.handlePress('Rock')} title='🤘 Rock' /></View>
        <View style={styles.button}><Button onPress={() => this.handlePress('Paper')} title='🧻 Paper' /></View>
        <View style={styles.button}><Button onPress={() => this.handlePress('Scissor')} title='✂️ Scissor' /></View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 20
  },
  button: {
    marginVertical: '5%',
    width: 200
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  innerContainer: {
    alignItems: 'center',
  },
})

export default GameScreen;
