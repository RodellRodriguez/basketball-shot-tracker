import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestImage from './src/TestImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Basketball Shot Tracker!</Text>
      <TestImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});