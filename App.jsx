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
  Icon,
} from 'react-native-paper';
import {
  //ini adalah tag bawaan dar react native
  SafeAreaView, //brguna untuk Meyesuaikan ukuran layar agar design tidak rusak, contohnya saat HP mempunyai Poni
  ScrollView, //berguna untuk membuat seuatu section bisa di scrol
  StyleSheet, //berguna untuk styling di react native
  View, //view ini fungsinya adalah DIV di react native dan untuk kontennya dimasukan kedalam section
  Image,
} from 'react-native';

function App() {
  const [keyword, setKeyword] = React.useState('');

  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.searchBar}
              label="Search Pasta, Bread, etc"
              value={keyword}
              onChangeText={text => setKeyword(text)}
              mode={'outlined'}
              outlineStyle={{borderRadius: 20}}
            />
          </View>

          <View>
            <Text style={styles.headSection}>Popular For You</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
            <View style={styles.borderPopular}>
              <Image
                style={styles.popularImage}
                source={require('./asset/hot-soup.png')}
              />
            </View>

            <View style={styles.borderPopular}>
              <Image
                style={styles.popularImage}
                source={require('./asset/fried-chicken.png')}
              />
            </View>
            <View style={styles.borderPopular}>
              <Image
                style={styles.popularImage}
                source={require('./asset/seafood.png')}
              />
            </View>
            <View style={styles.borderPopular}>
              <Image
                style={styles.popularImage}
                source={require('./asset/panna-cotta.png')}
              />
            </View>
          </View>

          <View>
            <Text style={styles.headSection}>New Recipes</Text>
          </View>

        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: '#FFFFFF',
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

  popularImage: {
    width: 54,
    height: 54,
    border: 'solid',
  },

  borderPopular: {
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: 'yellow',
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
  },

  newRecipesImage:{}
});

export default App;
