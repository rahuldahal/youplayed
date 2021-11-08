import React from 'react';
import { Text, Button } from 'react-native';

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
        color: '#ff0000',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: '#ff0000',
      }}
    >
      {children}
    </Text>
  );
}
