/* eslint-disable react/no-unstable-nested-components */
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
import {PaperProvider} from 'react-native-paper';
import Navigations from './navigation/navigation';

// import firestore from '@react-native-firebase/firestore';
//async storage disi buat get data buat validasi tabscreen
//kalo ada data user, maka tab login,register hilang
import AsyncStorage from '@react-native-async-storage/async-storage';

//import messaging untuk kebutuhan push notification
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore'; //import firestore

function App() {

  const [token, setToken] = React.useState('');

  console.log(token);

  //funtion generate token device
  const generateToken = async () => {
    const deviceToken = await messaging().getToken();
    setToken(deviceToken);
  };

  //function untuk meminta permisstion notif
  const requestUserPermission = async () => {
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
    requestUserPermission(); //meminta AKSES permisstion notif saat app pertama kali di load

    //mengirim data token ke firebase, menggunakan doc agar tidak terjadi duplicate token
    firestore()
      .collection('tokenList')
      .doc(token)
      .set({})
      .then(() => {
        console.log('token has saved');
      });
  }, []);


  return (
    <NavigationContainer>
      <PaperProvider>
        <Navigations />
      </PaperProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
