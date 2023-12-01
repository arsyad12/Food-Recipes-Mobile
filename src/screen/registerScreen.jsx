/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Button, PaperProvider} from 'react-native-paper';
import {
  //   ini adalah tag bawaan dar react native
  SafeAreaView, //brguna untuk Meyesuaikan ukuran layar agar design tidak rusak, contohnya saat HP mempunyai Poni
  ScrollView, //berguna untuk membuat seuatu section bisa di scrol
  StyleSheet, //berguna untuk styling di react native
  View, //view ini fungsinya adalah DIV di react native dan untuk kontennya dimasukan kedalam section
  TextInput,
  TouchableOpacity,
} from 'react-native';

import IconUser from 'react-native-vector-icons/FontAwesome5';
import IconMail from 'react-native-vector-icons/AntDesign';
import IconPass from 'react-native-vector-icons/Feather';
import IconPhone from 'react-native-vector-icons/Entypo';

function RegisterScreen({navigation}) {
  const [user, setUser] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  const registerHandler = () => {};
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{backgroundColor: '#ffffe5'}}>
            <View style={styles.container}>
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
                  <IconUser
                    style={styles.iconStyle}
                    name="user"
                    size={20}
                    color="white"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    placeholder="Name"
                    placeholderTextColor="white"
                  />
                </View>

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
                  <IconPhone
                    style={styles.iconStyle}
                    name="phone"
                    size={20}
                    color="white"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Phone Number"
                    placeholderTextColor="white"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.containerInput}>
                  <IconPass
                    style={styles.iconStyle}
                    name="lock"
                    size={20}
                    color="white"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Password"
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
                    onChangeText={setConfirm}
                    value={confirm}
                    placeholder="Confirm Password"
                    placeholderTextColor="white"
                  />
                </View>

                <View style={styles.containerBtnCreate}>
                  <Button
                    style={{borderRadius: 10, backgroundColor: '#ffdd56'}}
                    textColor="grey"
                    mode="contained"
                    onPress={() => registerHandler()}>
                    Create
                  </Button>
                </View>

                <View style={styles.textSubHeadContainer}>
                  <Text style={styles.textSubHead}>Already Have Account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textLoginNow}>Login Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#ffffe5',
    height: 1000,
  },
  textHeadContainer: {
    marginTop: 70,
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

export default RegisterScreen;
