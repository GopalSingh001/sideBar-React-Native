import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Setting';
import Facebook from './screens/Facebook';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName='Navigation'>
        <Drawer.Screen name='Navigation' component={Facebook} />
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Settings' component={Settings} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
