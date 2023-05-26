import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = ({ navigation }) => {

    return (
        <View style={{ marginTop: 300, alignItems: 'center' }}>
            <Text>Click on this button if you want to go back</Text>
            <Text
                onPress={() => navigation.navigate('Parent')}
                style={{
                    marginTop: 20,
                    backgroundColor: 'red',
                    paddingTop: 10,
                    paddingBottom:10,
                    paddingStart:20,
                    paddingEnd:20,
                    borderRadius:50
                }}>
                Go Home Page
            </Text>
        </View>
    );
}

export default Splash;
