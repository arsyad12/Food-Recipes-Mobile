/* eslint-disable react-native/no-inline-styles */
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
            <View style={{alignItems: 'center'}}>
              <View style={styles.borderPopular}>
                <Image
                  style={styles.popularImage}
                  source={require('./asset/hot-soup.png')}
                />
              </View>
              <Text>Soup</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={styles.borderPopular}>
                <Image
                  style={styles.popularImage}
                  source={require('./asset/fried-chicken.png')}
                />
              </View>
              <Text>Chicken</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={styles.borderPopular}>
                <Image
                  style={styles.popularImage}
                  source={require('./asset/seafood.png')}
                />
              </View>
              <Text>Seafood</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={styles.borderPopular}>
                <Image
                  style={styles.popularImage}
                  source={require('./asset/panna-cotta.png')}
                />
              </View>
              <Text>Desert</Text>
            </View>
          </View>

          <View>
            <Text style={styles.headSection}>New Recipes</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <View style={styles.newRecipesContainer}>
                <Image
                  style={styles.newRecipesImage}
                  source={require('./asset/food1.jpg')}
                />
              </View>
              <View style={styles.newRecipesContainer}>
                <Image
                  style={styles.newRecipesImage}
                  source={require('./asset/food2.jpg')}
                />
              </View>
              <View style={styles.newRecipesContainer}>
                <Image
                  style={styles.newRecipesImage}
                  source={require('./asset/food3.jpg')}
                />
              </View>
            </ScrollView>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.headSection}>Popular Recipess</Text>
            <Text style={styles.moreInfoText}>More Info</Text>
          </View>
        
            <ScrollView>
              <View style={{marginTop:20}}>
              {[...Array(10)].map((item, key) => (
                <View key={key} style={{flexDirection: 'row', paddingTop: 20}}>
                  <View>
                    <Image
                      style={styles.popularRecipesImg}
                      source={require('./asset/food3.jpg')}
                    />
                  </View>
                  <View>
                    <Text style={styles.textPopularRecipes}>
                      Mie Pedas Maklima Biadaps
                    </Text>
                    <Text style={styles.textCategory}>Spicy, Salted, Acid</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{marginLeft: 10, marginTop: 2}}
                        source={require('./asset/star.png')}
                      />
                      <Text style={styles.textRating}>4.9</Text>
                    </View>
                  </View>
                </View>
              ))}
              </View>
            </ScrollView>
          
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

  newRecipesImage: {
    height: 160,
    width: 130,
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
  },

  newRecipesContainer: {
    marginTop: 20,
    paddingRight: 20,
  },

  moreInfoText: {
    color: '#6D61F2',
    paddingTop: 25,
  },

  popularRecipesImg: {
    height: 64,
    width: 64,
    borderRadius: 16,
  },

  textPopularRecipes: {
    fontSize: 16,
    color: '#666666',
    fontWeight: 500,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  textCategory: {
    fontSize: 12,
    color: '#B6B6B6',
    fontWeight: 400,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  textRating: {
    fontSize: 12,
    color: '#B6B6B6',
    fontWeight: 400,
    paddingLeft: 5,
  },
});

export default App;
