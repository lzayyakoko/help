import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Card from './components/Card';
import Home from './components/Home';
import { GContextProvieder } from './context/GContext';
import Details from './components/Details';
import Swiper from './components/Swiper';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <GContextProvieder>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='Swiper' component={Swiper}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GContextProvieder>
  )
}

export default App