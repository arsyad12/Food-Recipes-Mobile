/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native-paper';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
function RegisterScreen() {
  const [user, setUser] = React.useState('');
  return (
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
            <Icon
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
            <Icon
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
            <Icon
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
            <Icon
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
            <Icon
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#ffffe5',
    height: 1000,
  },
  textHeadContainer: {
    alignItems: 'center',
  },
  textHead: {
    fontSize: 24,
    fontWeight: 500,
    color: 'orange',
  },
  textSubHeadContainer: {
    alignItems: 'center',
  },
  textSubHead: {
    fontSize: 12,
    fontWeight: 400,
    color: 'grey',
  },

  containerFormInput: {
    marginTop: 20,
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
});

export default RegisterScreen;
