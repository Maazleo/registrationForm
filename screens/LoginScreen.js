import React from 'react';
import { View, TextInput,Text,ImageBackground, Button,Image,StyleSheet ,TouchableOpacity} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleInitial = () => {
    navigation.navigate('Login');
  };
   const handleInitial2 = () => {
    navigation.navigate('Sign up');
  };
  return (
     
      <ImageBackground source={{ uri: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/05/bg.png' }}style={styles.backgroundImage}>
      <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleInitial2}>
          <Text style={styles.buttonText}> Sign up  </Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleInitial}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
    color:'white'
  },
  buttonContainer: {
    alignItems: 'center',
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

export default LoginScreen;
