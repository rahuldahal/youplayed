import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormField({
  label,
  type = 'text',
  currentState,
  setState,
}) {
  return (
    <View style={styles.formField}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setState}
        value={currentState}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formField: {
    marginVertical: 8,
    position: 'relative',
  },
  formLabel: {
    transform: [{ translateY: 32 }],
    color: 'grey',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    width: 300,
    padding: 4,
  },
});
