import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
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
  return (
    <View style={styles.container}>
      <SignUpScreen />
      <StatusBar animated={true} backgroundColor="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 4,
  },
});
