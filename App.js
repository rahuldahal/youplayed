import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen />
      <StatusBar
        animated={true}
        backgroundColor="#ff0000"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 4
  },
});
