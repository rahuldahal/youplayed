import React from 'react';
import { Text, Button } from 'react-native';
import colors from '../colors';

export default function Link({ navigation, to, type = 'text', children }) {
  function navigate() {
    navigation.navigate(to);
  }
  if (type === 'button') {
    return <Button onPress={navigate} title={children} />;
  }
  return (
    <Text
      onPress={navigate}
      style={{
        color: colors.red,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: colors.red,
      }}
    >
      {children}
    </Text>
  );
}
