import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
//import firebase from '@react-native-firebase/app';
//import '@react-native-firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';



function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User logged in successfully
      alert('Login successful!');
    } catch (error) {
      // Handle error (e.g., invalid credentials)
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Sign up')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
