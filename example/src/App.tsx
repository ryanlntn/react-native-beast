import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { multiply, start } from 'react-native-beast';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={start}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
