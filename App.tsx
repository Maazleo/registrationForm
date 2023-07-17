import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import Initial from './screens/Signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration Form"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={RegistrationScreen} />

        <Stack.Screen name="Sign up" component={Initial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
