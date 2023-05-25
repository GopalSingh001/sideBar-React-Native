import React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const Facebook = () => {
  return (
     <WebView
     style={{marginTop:30}}
     source={
        {
            uri:'https://reactnavigation.org/'
        }
     }/>
  );
}

export default Facebook;
