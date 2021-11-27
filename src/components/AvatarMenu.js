import React from 'react';
import { Image } from 'react-native';

export default function AvatarMenu({ uri }) {
  return (
    <Image
      style={{
        width: 32,
        height: 32,
        borderRadius: 32 / 2,
        borderWidth: 1,
        borderColor: '#f4f4f4',
      }}
      source={{ uri }}
    />
  );
}
