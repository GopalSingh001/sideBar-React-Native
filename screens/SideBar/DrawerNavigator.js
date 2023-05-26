import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from './Home';
import Profile from './Profile';
import Settings from './Setting';
import Navigation from './Navigation';

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return (
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName='BottomNavigator'>
          <Drawer.Screen name='BottomNavigator' component={Home}  />
          <Drawer.Screen name='Upwork' component={Navigation}  />
          <Drawer.Screen name='Profile' component={Profile}/>
          <Drawer.Screen name='Settings' component={Settings}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator