import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import Heading from '../components/Heading';
import { useAuth } from '../contexts/AuthProvider';

export default function Home() {
  const [user] = useAuth();
  console.log(user);
  return (
    <View>
      <Image source={{ uri: user.avatar }} />
      <Heading size="1">Authenticated as {user.fullname}!</Heading>
      <Text>This is the main screen.</Text>
    </View>
  );
}
