/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider, Button, Searchbar} from 'react-native-paper';
import {
  //ini adalah tag bawaan dar react native
  SafeAreaView, //brguna untuk Meyesuaikan ukuran layar agar design tidak rusak, contohnya saat HP mempunyai Poni
  ScrollView, //berguna untuk membuat seuatu section bisa di scrol
  StyleSheet, //berguna untuk styling di react native
  View, //view ini fungsinya adalah DIV di react native dan untuk kontennya dimasukan kedalam section
  Text,
} from 'react-native';

function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <View>
        <Searchbar
      placeholder="Search"
      onChangeText={''}
      value={''}
    />
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
