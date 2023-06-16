import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={style.safeArea}>
      <WebView
      source={{ uri: 'https://insightful-okedairobridget.wordpress.com/' }}
      style={ style.webView }     
    />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: 20,
  },
  safeArea: {
    flex: 1,
  }
})