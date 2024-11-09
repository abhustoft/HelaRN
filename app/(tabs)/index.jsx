import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://blog.logrocket.com/' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});