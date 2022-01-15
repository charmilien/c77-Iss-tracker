
import * as React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import MeteorScreen from './screens/MeteorScreen'
import IssLocationScreen from './screens/IssLocationScreen'
import UpdateScreen from './screens/UpdateScreen'

const Stack = createStackNavigator()

export default class App extends React.Component {
  render(){
  return (
   <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Iss" component={IssLocationScreen}/>
          <Stack.Screen name="Meteor" component={MeteorScreen}/>
          <Stack.Screen name="Update" component={UpdateScreen}/>

      </Stack.Navigator>
       
   </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

