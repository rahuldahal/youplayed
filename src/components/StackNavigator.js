import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthProvider';
import Home from '../screens/Home';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const [user] = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({ title: user.fullname })}
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
  );
}
