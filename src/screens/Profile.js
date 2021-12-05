import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthProvider';

export default function Profile() {
  const [user] = useAuth();
  const [, setIsAuthenticated] = useAuth();

  async function signOut() {
    await auth.signOut();
    setIsAuthenticated(false);
  }

  return (
    <View>
      <Text>{user.fullname}</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}
