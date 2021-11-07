import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import Heading from '../components/Heading';

export default function SignUpScreen() {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} />
      <Heading size="1">Sign up!</Heading>
      <Text style={styles.muted}>
        Please fill up the form below to continue.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          keyboardType="visible-password"
          secureTextEntry
          placeholder="Password"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Sign Up"
          color="#ff0000"
          disabled={name && email && password ? false : true}
        />
      </View>

      <Text style={styles.muted}>Already have an account? Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muted: {
    color: 'grey',
  },
  form: {
    marginTop: 32,
  },
  buttonWrapper: {
    width: 300,
    marginVertical: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    width: 300,
    padding: 4,
  },
});
