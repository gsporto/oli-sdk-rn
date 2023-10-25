import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MyWebComponent } from 'react-native-oli-sdk';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0,
          marginTop: 100,
        }}
      >
        <Text>count: {count}</Text>

        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={{ padding: 20, backgroundColor: '#bcff8f' }}
        >
          <Text>Increment </Text>
        </TouchableOpacity>
      </View>
      <MyWebComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
