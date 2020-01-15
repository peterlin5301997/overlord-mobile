import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class GameScreen extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.title}>GameScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
})

export default GameScreen;
