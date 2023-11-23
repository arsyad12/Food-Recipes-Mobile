/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  PaperProvider,
  Button,
  TextInput,
  Text,
  Surface,
  Image,
} from 'react-native-paper';
import {
  //ini adalah tag bawaan dar react native
  SafeAreaView, //brguna untuk Meyesuaikan ukuran layar agar design tidak rusak, contohnya saat HP mempunyai Poni
  ScrollView, //berguna untuk membuat seuatu section bisa di scrol
  StyleSheet, //berguna untuk styling di react native
  View, //view ini fungsinya adalah DIV di react native dan untuk kontennya dimasukan kedalam section
} from 'react-native';
import {green100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

function App() {
  const [keyword, setKeyword] = React.useState('');

  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            label="Search Pasta, Bread, etc"
            value={keyword}
            onChangeText={text => setKeyword(text)}
            mode={'outlined'}
          />
          <Text style={styles.headSection}>Popular For You</Text>
          <Surface style={styles.surface} elevation={4}>
          <Text>Blals</Text>
          </Surface>
          <Image source={require('./asset/seafood.png')} />

        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: 'white',
    height: 900,
  },

  searchBar: {
    padding: 3,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
  },

  headSection: {
    fontSize: 20,
    paddingTop: 20,
  },
});

export default App;
