import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
//import firebase from '@react-native-firebase/app';
//import '@react-native-firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      // User signed up successfully
      alert('Signup successful!');
    } catch (error) {
      // Handle error (e.g., email already in use)
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.container11}>
      <View style={styles.container1}>
      <Button style={{width:20,height:10}} title="Sign Up" onPress={handleSignUp} />
      </View>
      <View style={styles.container1}>
      <Button style={styles.button} title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container1: {
    paddingLeft:20,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  container11: {
    flexDirection: 'row',
    
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SignupScreen;
