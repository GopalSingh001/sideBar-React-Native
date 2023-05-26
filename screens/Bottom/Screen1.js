import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const Screen1 = ({ navigation }) => {
    return (
        <ImageBackground
            style={{
                justifyContent:'flex-end',
                alignItems:'center',
                height: '100%',
                width: '100%'
            }}
            source={require('./images/indigate.jpg')}


        >
            <Text onPress={() => {
                navigation.openDrawer();

            }}
                style={{
                    backgroundColor: 'red',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingStart: 20,
                    paddingEnd: 20,
                    borderRadius: 50,
                    marginBottom:20

                }}
            >
                Open the Side Bar
            </Text>
        </ImageBackground>

    );
}

export default Screen1;
