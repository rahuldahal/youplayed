import React from 'react';
import { StyleSheet, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Heading({ size, capitalize = false, children }) {
  const commonStyles = 'font-bold text-black capitalize';
  const sizeStyleMap = {
    1: 'text-3xl mb-4',
    2: 'text-2xl mb-4',
    3: 'text-xl mb-2',
    4: 'text-lg mb-2',
    5: 'text-base mb-2',
  };
  const style = `${commonStyles} ${sizeStyleMap[size]}`;
  return <Text style={tw.style(style.split(' '))}>{children}</Text>;
}
