/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Button, PaperProvider, Snackbar} from 'react-native-paper';
import {
  //   ini adalah tag bawaan dar react native
  SafeAreaView, //brguna untuk Meyesuaikan ukuran layar agar design tidak rusak, contohnya saat HP mempunyai Poni
  ScrollView, //berguna untuk membuat seuatu section bisa di scrol
  StyleSheet, //berguna untuk styling di react native
  View, //view ini fungsinya adalah DIV di react native dan untuk kontennya dimasukan kedalam section
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconMail from 'react-native-vector-icons/AntDesign';
import IconPass from 'react-native-vector-icons/Feather';

import auth from '@react-native-firebase/auth'; //import auth
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState('');

  //snackbar state
  const [visible, setVisible] = React.useState(false);
  const [messageSnackbar, setMessageSnackbar] = React.useState('');
  const [snackbarBg, setSnackbarBg] = React.useState('');
  const onDismissSnackBar = () => setVisible(false);

  const loginHandler = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setVisible(true);
        setMessageSnackbar('Login succes!, Wait a second');
        setSnackbarBg('green');
        getUser();
        // setTimeout(() => {
        //   navigation.navigate('Home');
        // }, 2000);
        RNRestart.restart();
      })
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          setVisible(true);
          setMessageSnackbar('Email or Password is incorect !');
          setSnackbarBg('red');
        }
        if (error.code === 'auth/invalid-email') {
          setVisible(true);
          setMessageSnackbar('That email address is invalid!');
          setSnackbarBg('red');
        }

        // console.error(error);
      });
  };

  const getUser = () => {
    firestore()
      .collection('user')
      //filtering data antara yang didapet dari parameter dengan yang di firestore
      .where('email', '==', email)
      .get()
      .then(async querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });
        setUser(tempData); //setdata nya harus diluar foreach, biar kedetect
        await AsyncStorage.setItem('user', JSON.stringify(tempData[0]._data));
      });
  };

  console.log(user);

  return (
    <>
      <Snackbar
        wrapperStyle={{top: 0, position: 'absolute', zIndex: 99999}}
        style={{backgroundColor: snackbarBg}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'X',
          onPress: () => {
            onDismissSnackBar();
          },
        }}>
        <Text style={{color: 'white'}}>{messageSnackbar}</Text>
      </Snackbar>

      <PaperProvider>
        <SafeAreaView>
          <View style={{backgroundColor: '#ffffe5'}}>
            <View style={styles.container}>
              <View style={styles.containerLogo}>
                <Image source={require('../asset/ic_launcher_round.png')} />
              </View>

              <View style={styles.textHeadContainer}>
                <Text style={styles.textHead}>Let’s Get Started !</Text>
              </View>

              <View style={styles.textSubHeadContainer}>
                <Text style={styles.textSubHead}>
                  Create new account to access all feautures
                </Text>
              </View>

              <View style={styles.containerFormInput}>
                <View style={styles.containerInput}>
                  <IconMail
                    style={styles.iconStyle}
                    name="mail"
                    size={20}
                    color="white"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="white"
                  />
                </View>
                <View style={styles.containerInput}>
                  <IconPass
                    style={styles.iconStyle}
                    name="unlock"
                    size={20}
                    color="white"
                  />
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="white"
                  />
                </View>

                <View style={styles.containerBtnCreate}>
                  <Button
                    style={{borderRadius: 10, backgroundColor: '#ffdd56'}}
                    textColor="grey"
                    mode="contained"
                    onPress={() => {
                      loginHandler();
                    }}>
                    LOGIN
                  </Button>
                </View>

                <View style={styles.textSubHeadContainer}>
                  <Text style={styles.textSubHead}>Don’t have an account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textLoginNow}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#ffffe5',
    height: 1000,
  },
  containerLogo: {
    marginTop: 40,
    alignItems: 'center',
  },
  textHeadContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  textHead: {
    fontSize: 24,
    fontWeight: 500,
    color: 'orange',
  },
  textSubHeadContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  textSubHead: {
    fontSize: 12,
    fontWeight: 400,
    color: 'grey',
  },

  textLoginNow: {
    fontSize: 12,
    fontWeight: 400,
    color: 'orange',
  },

  containerFormInput: {
    marginTop: 30,
  },

  containerInput: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 60,
  },

  iconStyle: {
    padding: 13,
    backgroundColor: 'orange',
    height: 50,
    width: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  input: {
    backgroundColor: 'orange',
    flex: 1,
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: 'white',
  },
  containerBtnCreate: {
    marginTop: 20,
  },
});
export default LoginScreen;
