/* eslint-disable no-shadow */
import React from 'react';

import {PaperProvider, Snackbar} from 'react-native-paper';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
// import RNRestart from 'react-native-restart';

function ProfilScreen({navigation}) {
  const state = useSelector(state => state.user);
  //supaya ga error unknown selector, state yang harus dipilih mau yang mana
  //disini mau ngambil data dari store user, jadi state nya state.user

  const {resultUser} = state;

  console.log(state);
  // console.log(resultUser);

  return (
    <>
      <PaperProvider>
        <SafeAreaView>
          <View style={styles.containerBgOrange} />

          <View style={styles.containerBgLigthOrange} />

          <View style={styles.containerImageandName}>
            <Image
              style={styles.profileImage}
              source={require('../asset/food1.jpg')}
            />
            <Text style={styles.textName}>{resultUser.username}</Text>
          </View>

          <View style={styles.containerMenuProfile}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <View style={styles.borderMenu}>
                <View style={{width: 150}}>
                  <Text style={styles.textMenu}>Edit Profile</Text>
                </View>
                <View
                  style={{marginLeft: 20, width: 150, alignItems: 'flex-end'}}>
                  <Icon name="angle-right" size={22} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.borderMenu}>
              <View style={{width: 150}}>
                <Text style={styles.textMenu}>My Recipe</Text>
              </View>
              <View
                style={{marginLeft: 20, width: 150, alignItems: 'flex-end'}}>
                <Icon name="angle-right" size={22} color="white" />
              </View>
            </View>

            <View style={styles.borderMenu}>
              <View style={{width: 150}}>
                <Text style={styles.textMenu}>Saved Recipe</Text>
              </View>
              <View
                style={{marginLeft: 20, width: 150, alignItems: 'flex-end'}}>
                <Icon name="angle-right" size={22} color="white" />
              </View>
            </View>

            <View style={styles.borderMenu}>
              <View style={{width: 150}}>
                <Text style={styles.textMenu}>Liked Recipe</Text>
              </View>
              <View
                style={{marginLeft: 20, width: 150, alignItems: 'flex-end'}}>
                <Icon name="angle-right" size={22} color="white" />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                AsyncStorage.removeItem('user');
                AsyncStorage.removeItem('idDoc');
                // RNRestart.restart();
                setTimeout(() => {
                  navigation.navigate('Home');
                }, 2000);
              }}>
              <View style={styles.borderMenu}>
                <View style={{width: 150}}>
                  <Text style={styles.textMenu}>Logout</Text>
                </View>
                <View
                  style={{marginLeft: 20, width: 150, alignItems: 'flex-end'}}>
                  <Icon name="angle-right" size={22} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  containerBgOrange: {backgroundColor: 'orange', height: 400},
  containerBgLigthOrange: {
    backgroundColor: '#ffffe5',
    height: 500,
    borderRadius: 30,
    top: -100,
  },
  containerImageandName: {
    position: 'absolute',
    width: 400,
    height: 250,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileImage: {width: 100, height: 100, borderRadius: 50},
  textName: {paddingTop: 15, color: 'white', fontSize: 15},

  containerMenuProfile: {
    position: 'absolute',
    width: 400,
    height: 900,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  borderMenu: {
    flexDirection: 'row',
    borderColor: 'orange',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 350,
    padding: 10,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: 'orange',
  },
  textMenu: {color: 'white', fontSize: 15},
});

export default ProfilScreen;
