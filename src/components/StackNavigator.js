import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthProvider';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { Image } from 'react-native';
import Feed from '../screens/Feed';
import colors from '../colors';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const [token] = useAuth();
  const options = {
    headerTitle: () => (
      <Image
        source={require('../assets/icon.png')}
        style={{ width: 48, height: 32 }}
      />
    ),
    headerStyle: {
      backgroundColor: colors.red,
    },
  };

  return (
    <Stack.Navigator>
      {token ? (
        <Stack.Screen name="Feed" component={Feed} options={options} />
      ) : (
        <>
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={options}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={options}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
