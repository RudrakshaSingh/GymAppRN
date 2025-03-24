import { SafeAreaView, Image, Dimensions, Text,  View, Pressable } from 'react-native';
import React from 'react';
import Start from './src/components/Start';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const App = () => {
  return (
    <View style={{ flex: 1 }}><Start/></View>
  );
};

export default App;