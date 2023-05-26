import React  from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
const Navigation = () => {
  

  return (
     <WebView
     
     source={
        {
            uri:'https://upwork.com/'   
        }
     }/>
  );
}

export default Navigation;
