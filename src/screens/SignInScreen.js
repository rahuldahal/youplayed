import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import { auth, db } from '../../App';
import Heading from '../components/Heading';
import Link from '../components/Link';
import { useAuth } from '../contexts/AuthProvider';
import FormField from '../components/FormField';
import Scrollable from '../components/Scrollable';
import colors from '../colors';

export default function SignInScreen({ navigation }) {
  const [, setIsAuthenticated] = useAuth();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  async function signInUser() {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      const { docs } = await db
        .collection('users')
        .where('auth', '==', user.uid)
        .get();
      const data = docs[0].data();
      setIsAuthenticated({ data });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Scrollable>
      <View style={styles.container}>
        <Image source={require('../assets/icon.png')} />
        <Heading size="1">Sign in!</Heading>
        <Text style={styles.muted}>
          Please fill up the form below to continue.
        </Text>
        <View style={styles.form}>
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
            title="Sign In"
            color={colors.red}
            disabled={email && password ? false : true}
            onPress={signInUser}
          />
        </View>

        <Text style={styles.muted}>
          Don't have an account?{' '}
          <Link navigation={navigation} to="SignUpScreen">
            Sign Up
          </Link>
        </Text>
      </View>
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muted: {
    color: colors.redishGrey,
  },
  form: {
    marginTop: 32,
  },
  buttonWrapper: {
    width: 300,
    marginVertical: 32,
  },
});
