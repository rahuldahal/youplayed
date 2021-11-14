import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import Heading from '../components/Heading';

export default function Home() {
  return (
    <View>
      <Heading size="1">Authenticated!</Heading>
      <Text>This is the main screen.</Text>
    </View>
  );
}
