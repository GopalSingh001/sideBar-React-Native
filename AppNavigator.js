import React,{useEffect} from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/StackNavigator/Splash';
import Parent from './screens/StackNavigator/Parent';



// const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator();


const AppNavigator = () => {

    // useEffect(()=>{
    //   const backButton=()=>{
    //     Alert.alert('stop','Are you sure want a go back.',[
    //       {
    //         text:'Cancel',
    //         onPress:()=>null,
    //         style:'cancel'
    //       },
    //       {
    //         text:'Yes',
    //         onPress:()=>BackHandler.exitApp()
    //       }
    //     ]);
    //   return true;
    //   }
    //   const backHandler=BackHandler.addEventListener(
    //     'hardwareBackPress',backButton
    //   )
    // },[])
  
    
    return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
            name='Child'
            component={Splash}
            options={{headerShown:true}}
            
          />

          <Stack.Screen 
          name='Parent'
          component={Parent}
          options={{headerShown:true}}
           
          />
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;
   
