import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Home from './src/components/Home';
import SplashScreen from './src/components/SplashScreen';
import BreakFast from './src/components/Breakfast';
import Dinner from './src/components/Dinner';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="splash">

       <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}} />   
      <Stack.Screen name="home" options={{headerShown:false,...TransitionPresets.ScaleFromCenterAndroid}} component={Home} />
      
      <Stack.Screen name="breakfast" component={BreakFast} options={{headerShown:false,...TransitionPresets.ModalTransition}} />
      <Stack.Screen name="dinner" component={Dinner} options={{headerShown:false,...TransitionPresets.ModalTransition}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}