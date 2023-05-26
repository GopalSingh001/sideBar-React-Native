import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';


const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='India Gate' component={Screen1} options={{
        headerShown: true, tabBarIcon: (changeColor) => {
          return (
            <Image
              source={require('./images/arrow.png')}
              style={{
                flex: 1,
                width: 35,
                tintColor: changeColor.focused ? 'black' : 'pink'
              }} />
          )
        }
      }} />
      <Bottom.Screen name='Prem Mandir' component={Screen2} options={{
        headerShown: true, tabBarIcon: (changeColor) => {
          return (
            <Image
              source={require('./images/arrow.png')}
              style={{
                flex: 1,
                width: 35,
                tintColor: changeColor.focused ? 'black' : 'pink'
              }}
            />
          )
        }
      }} />
      <Bottom.Screen name='Taj Mahal' component={Screen3} options={{
        headerShown: true, tabBarIcon: (changeColor) => {
          return (
            <Image
              source={require('./images/arrow.png')}
              style={{
                flex: 1,
                width: 35,
                tintColor: changeColor.focused ? 'black' : 'pink'
              }}
            />
          )
        }
      }} />

    </Bottom.Navigator>
  );
}

export default BottomNavigator;

