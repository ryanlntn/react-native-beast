import * as React from 'react';

import { ScrollView, StyleSheet, Text } from 'react-native';
// import Beast, { createWebSocketServer } from 'react-native-beast';
import Beast from 'react-native-beast';

export default function App() {
  React.useEffect(() => {
    Beast.createWebSocketServer({ port: 8888, threads: 4 });
  }, []);
  const text = Beast.test();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{text}</Text>
      {/* <Button onPress={Beast.start} title="Start WebSocketServer" />
      <Button
        onPress={() => createWebSocketServer('ws://0.0.0.0:8888')}
        title="Create WebSocketServer"
      /> */}
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
