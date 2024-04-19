import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screen/Splash';
import Herb from './screen/Herb';
import Farmer from './screen/Farmer';
import Source from './screen/Source';
import Detail from './screen/Detail';

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
          options={{title: 'สมุนไพรท้องถิ่นไทเลย'}}
        />
        <Stack.Screen
          name="Source"
          component={Source}
          options={{title: 'สถานที่'}}
        />
        <Stack.Screen
        name="Farmer"
        component={Farmer} 
        options={{title: 'ปราชญ์ชาวบ้าน'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

export default App
