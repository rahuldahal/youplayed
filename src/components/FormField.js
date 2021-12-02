import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../colors';

export default function FormField({
  label,
  type = 'text',
  currentState,
  setState,
}) {
  const TRANSLATION_START = 32;
  const translationValue = useState(new Animated.Value(TRANSLATION_START))[0];
  const ANIMATION_DURATION = 300;

  function animateLabelUp() {
    Animated.timing(translationValue, {
      toValue: 8,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  }

  function animateLabelDown() {
    if (currentState !== '') {
      return;
    }
    Animated.timing(translationValue, {
      toValue: TRANSLATION_START,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={styles.formField}>
      <Animated.View style={{ transform: [{ translateY: translationValue }] }}>
        <Text
          style={{
            color: currentState ? colors.red : colors.redishGrey,
            fontSize: 18,
          }}
        >
          {label}
        </Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        onChangeText={setState}
        value={currentState}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password'}
        onFocus={animateLabelUp}
        onBlur={animateLabelDown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formField: {
    marginVertical: 4,
    position: 'relative',
  },
  formLabel: {
    color: colors.redishGrey,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.red,
    width: 300,
    padding: 4,
  },
});
