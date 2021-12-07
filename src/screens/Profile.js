import React from 'react';
import { Button, Text, View } from 'react-native';
import { auth } from '../../App';
import { useAuth } from '../contexts/AuthProvider';

export default function Profile() {
  const [user, setUser] = useAuth();

  async function signOut() {
    await auth.signOut();
    setUser(null);
  }

  return (
    <View>
      <Text>{user.fullname}</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}
