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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screen/homeScreen';
import DetailRecipes from './src/screen/detailRecipes';
import RegisterScreen from './src/screen/registerScreen';
import LoginScreen from './src/screen/loginScreen';
import PopulraScreen from './src/screen/populraScreen';
import ListFood from './src/component/ListFood';
import ProfilScreen from './src/screen/profilScreen';
import EditProfileScreen from './src/screen/editProfileScreen';

//async storage disi buat get data buat validasi tabscreen
//kalo ada data user, maka tab login,register hilang
import AsyncStorage from '@react-native-async-storage/async-storage';


//import messaging untuk kebutuhan push notification
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore'; //import firestore

import // StyleSheet, //berguna untuk styling di react native

'react-native';

function App() {
  const Stack = createNativeStackNavigator(); //untuk navigation antar component
  const Tab = createBottomTabNavigator(); //navigasi bottom

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

  function TabScreen() {
    //function untuk navigasi tabscreeen
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'orange',
          tabBarItemStyle: {
            padding: 0,
          },

          tabBarStyle: {
            height: 60,
            backgroundColor: '#ffffe5',
            borderTopWidth: 0.5,
            borderTopColor: 'orange',
          },
        })}>
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({color, size}) => (
              <IconAntDesign name="login" color="orange" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color="orange" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="user-plus" color="orange" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilScreen}
          options={{
            headerShown: false,
            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color="orange" size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* name digunakan untuk link navigasi nantinya */}
        {/* komponen adalah page yang akan di tampilkan */}
        {/* component yang pertama kali dipanggil akan jadi homepage */}
        {/* Tabscreen dan stack screen gabisa digabung dalam 1 navigator container */}
        {/* jadi tab screen dibuat function dan dipanggil jadi komponen baru di stackscreen*/}

        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailRecipes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Popular"
          component={PopulraScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={ListFood}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
