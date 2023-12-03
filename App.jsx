/* eslint-disable react-hooks/exhaustive-deps */
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
import RegisterScreen from './src/screen/registerScreen';
import LoginScreen from './src/screen/loginScreen';
//import messaging untuk kebutuhan push notification
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore'; //import firestore

import {

  // StyleSheet, //berguna untuk styling di react native

} from 'react-native';

function App() {
  const Stack = createNativeStackNavigator();//untuk navigation

  const [token,setToken] = React.useState('');

  console.log(token);

  //funtion generate token device
  const generateToken = async()=>{
    const deviceToken = await messaging().getToken();
    setToken(deviceToken);
};

  //function untuk meminta permisstion notif
  const requestUserPermission = async()=> {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      generateToken(); //kalo diijinin atau enable, token device bakal dibuat
      console.log('Authorization status:', authStatus);
    }
  };


  React.useEffect(() => {
    requestUserPermission(); //meminta permisstion notif saat app pertama kali di load

    //mengirim data token ke firebase, menggunakan doc agar tidak terjadi duplicate token
    firestore()
            .collection('tokenList').doc(token).set({})
            .then(() => {
              console.log('token has saved');
            });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
          {/* name digunakan untuk link navigasi nantinya */}
          {/* komponen adalah page yang akan di tampilkan */}
          {/* component yang pertama kali dipanggil akan jadi homepage */}
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailRecipes} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
