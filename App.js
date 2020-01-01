import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';

export default class AuthScreen extends React.Component {
  signInAsync = async () => {
    try {
      const { type, accessToken } = await Google.logInAsync({
        //using host.exp.Exponent in bundle identifier
        iosClientId: '918451670681-0tdshmgcstk6vtrnvi4bppharmj8g95q.apps.googleusercontent.com',
        androidClientId: '918451670681-kjo7jk0r2tb66jng3kcudh9edfmgvunv.apps.googleusercontent.com',
      });
      
      if (type === 'success') {
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        alert('success');
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
      console.log(message)
    }
  };

  render() {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity onPress={this.signInAsync} >
      <Text>Sign In</Text>
      </TouchableOpacity>
    </View>);
  }
}