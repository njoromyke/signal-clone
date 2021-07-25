import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c6bed',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          options={{
            title: 'Sign In',
          }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            title: 'Home',
          }}
          name='Home'
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            title: 'Sign Up',
          }}
          name='Register'
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            title: 'Add Chat',
          }}
          name='AddChat'
          component={AddChatScreen}
        />
        <Stack.Screen
          options={{
            title: 'Chat',
          }}
          name='Chat'
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
