// Index.android.js - place code here for Android!

// Import a library เพื่อใช้สำหรับสร้าง Component
import React from 'react';
import { AppRegistry, Text } from 'react-native';

// สร้าง Component
const App = () => (
  <Text>Some Text</Text>
);

// Render บนอุปกรณ์ Android
AppRegistry.registerComponent('albums', () => App);
