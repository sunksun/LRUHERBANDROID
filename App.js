import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screen/Splash';
import Herb from './screen/Herb';
import Item1 from './screen/Item1';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'ยินดีต้อนรับ'}}
        />
        <Stack.Screen
          name="Herb"
          component={Herb}
          options={{title: 'สมุนไพร'}}
        />
        <Stack.Screen
          name="Item1"
          component={Item1}
          options={{title: 'แฝกหอม'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

export default App
