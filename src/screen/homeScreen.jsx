import React from 'react';
import {PaperProvider, Text, Searchbar} from 'react-native-paper';
import {
  //   ini adalah tag bawaan dar react native
  SafeAreaView, //brguna untuk Meyesuaikan ukuran layar agar design tidak rusak, contohnya saat HP mempunyai Poni
  ScrollView, //berguna untuk membuat seuatu section bisa di scrol
  StyleSheet, //berguna untuk styling di react native
  View, //view ini fungsinya adalah DIV di react native dan untuk kontennya dimasukan kedalam section
  Image,
  TouchableOpacity,
} from 'react-native';

//get data dari API static
import listData from '../data/recipes.json';

function HomeScreen({navigation}) {
  const [keyword, setKeyword] = React.useState('');
  return (
    /* eslint-disable react-native/no-inline-styles */

    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     */
    <PaperProvider>
      <SafeAreaView>
        <ScrollView style={styles.outContainer}>
          <View style={styles.container}>
            <View>
              <Searchbar
                style={styles.searchBar}
                placeholder="Search Pasta, Bread, etc"
                value={keyword}
                onChangeText={text => setKeyword(text)}
                outlineStyle={{borderRadius: 20}}
              />
            </View>

            <View>
              <Text style={styles.headSection}>Popular For Your</Text>
            </View>

            <View style={{flexDirection: 'row', gap: 10}}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.borderPopular}>
                  <Image
                    style={styles.popularImage}
                    source={require('../asset/hot-soup.png')}
                  />
                </View>
                <Text>Soup</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <View style={styles.borderPopular}>
                  <Image
                    style={styles.popularImage}
                    source={require('../asset/fried-chicken.png')}
                  />
                </View>
                <Text>Chicken</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <View style={styles.borderPopular}>
                  <Image
                    style={styles.popularImage}
                    source={require('../asset/seafood.png')}
                  />
                </View>
                <Text>Seafood</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <View style={styles.borderPopular}>
                  <Image
                    style={styles.popularImage}
                    source={require('../asset/panna-cotta.png')}
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details')}>
                  <View style={styles.newRecipesContainer}>
                    <Image
                      style={styles.newRecipesImage}
                      source={require('../asset/food1.jpg')}
                    />
                    <View style={styles.newRecipesOverlay} />
                    <Text style={styles.newRecipesTitle}>Oseng</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.newRecipesContainer}>
                  <Image
                    style={styles.newRecipesImage}
                    source={require('../asset/food2.jpg')}
                  />
                  <View style={styles.newRecipesOverlay} />
                  <Text style={styles.newRecipesTitle}>Pizza</Text>
                </View>
                <View style={styles.newRecipesContainer}>
                  <Image
                    style={styles.newRecipesImage}
                    source={require('../asset/food3.jpg')}
                  />
                  <View style={styles.newRecipesOverlay} />
                  <Text style={styles.newRecipesTitle}>Seafood</Text>
                </View>
              </ScrollView>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.headSection}>Popular Recipes</Text>
              <Text style={styles.moreInfoText}>More Info</Text>
            </View>

            <View>
              {listData.map((item, key) => (
                <View key={key} style={{flexDirection: 'row', paddingTop: 20}}>
                  <View>
                    <Image
                      style={styles.popularRecipesImg}
                      source={{uri: item.image}}
                    />
                  </View>
                  <View>
                    <Text style={styles.textPopularRecipes}>{item.title}</Text>
                    <Text style={styles.textCategory}>Spicy, Salted, Acid</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{marginLeft: 10, marginTop: 2}}
                        source={require('../asset/star.png')}
                      />
                      <Text style={styles.textRating}>4.8</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: '#ffffe5',
    height: 900,
  },

  outContainer: {
    backgroundColor: '#ffffe5',
  },

  searchBar: {
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
    borderColor: '#FFFF00',
    backgroundColor: '#FFFF00',
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
  },

  newRecipesImage: {
    height: 160,
    width: 130,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
  },

  newRecipesOverlay: {
    height: 160,
    width: 130,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.4,
  },

  newRecipesTitle: {
    position: 'absolute',
    color: 'white',
    paddingLeft: 10,
    paddingTop: 130,
    fontWeight: 700,
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
    paddingRight: 60,
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

export default HomeScreen;
