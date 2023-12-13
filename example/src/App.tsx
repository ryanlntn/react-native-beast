import * as React from 'react';

import { Button, ScrollView, StyleSheet } from 'react-native';
import { start } from 'react-native-beast';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={() => start()} title="Start WebSocketServer" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
