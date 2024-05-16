import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <WebView
        source={{ uri: 'https://www.meta.com' }}
        style={styles.flexContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});

export default App;