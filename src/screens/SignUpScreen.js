import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import Heading from '../components/Heading';
import { auth } from '../../App';
import { db } from '../../App';
import Link from '../components/Link';
import { useAuth } from '../contexts/AuthProvider';
import FormField from '../components/FormField';

export default function SignUpScreen({ navigation }) {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [, setIsAuthenticated] = useAuth();

  async function signUpUser() {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const data = {
        fullname: name,
        auth: user.uid,
        createdAt: user.metadata.creationTime,
        lastLoginAt: user.metadata.lastSignInTime,
        avatar:
          user.photoURL ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            name
          )}&background=random`,
      };
      await db.collection('users').add(data);
      setIsAuthenticated(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} />
      <Heading size="1">Sign up!</Heading>
      <Text style={styles.muted}>
        Please fill up the form below to continue.
      </Text>
      <View style={styles.form}>
        <FormField
          label="Fullname"
          currentState={name}
          setState={onChangeName}
        />
        <FormField
          label="Email"
          type="email"
          currentState={email}
          setState={onChangeEmail}
        />
        <FormField
          label="Password"
          type="password"
          currentState={password}
          setState={onChangePassword}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Sign Up"
          color="#ff0000"
          disabled={name && email && password ? false : true}
          onPress={signUpUser}
        />
      </View>

      <Text style={styles.muted}>
        Already have an account?{' '}
        <Link navigation={navigation} to="SignInScreen">
          Sign In
        </Link>
      </Text>
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
