import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
  }

  render() {
    return(
      <View>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Username'
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button title='Login' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  textInput: {
    backgroundColor: 'white',
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5,
  }
})

export default LoginScreen;
