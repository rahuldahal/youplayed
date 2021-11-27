import React from 'react';
import { ScrollView } from 'react-native';

export default function Scrollable({ children }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}>
      {children}
    </ScrollView>
  );
}
