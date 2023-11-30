/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen';
import DetailRecipes from './src/screen/detailRecipes';

import {

  StyleSheet, //berguna untuk styling di react native

} from 'react-native';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
          {/* name digunakan untuk link navigasi nantinya */}
          {/* komponen adalah page yang akan di tampilkan */}
          {/* component yang pertama kali dipanggil akan jadi homepage */}
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailRecipes} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
