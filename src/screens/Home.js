import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import Heading from '../components/Heading';
import { useAuth } from '../contexts/AuthProvider';

export default function Home() {
  const [user] = useAuth();
  return (
    <View>
      <Image
        style={{ width: 48, height: 48, borderRadius: 48 / 2 }}
        source={{ uri: user.avatar }}
      />
      <Heading size="1">Authenticated as {user.fullname}!</Heading>
      <Text>This is the main screen.</Text>
    </View>
  );
}
