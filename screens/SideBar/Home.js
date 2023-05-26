import React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
import BottomNavigator from '../Bottom/BottomNavigator';

const Home = () => {
  return (
     <View style={{flex:1}}>
      <BottomNavigator/>
     </View>
  );
}

export default Home;
