import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSEGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';
import { AuthProvider } from './src/contexts/AuthProvider';
import StackNavigator from './src/components/StackNavigator';
import colors from './src/colors';
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
export const db = app.firestore();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar animated={true} backgroundColor={colors.red} />
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
