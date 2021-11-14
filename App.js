import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSEGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';
import Heading from './src/components/Heading';
import Home from './src/screens/Home';
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSEGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#ff0000" />
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
        ) : (
          <>
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{ title: 'Sign in' }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ title: 'Sign up' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
