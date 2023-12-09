/* eslint-disable eqeqeq */
import React from 'react';

import {PaperProvider, Text} from 'react-native-paper';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import LISTFOOD from '../component/listFood';
import listData from '../data/recipes.json';

function PopulraScreen({navigation, route}) {
  const {category} = route.params;
  console.log(category);
  return (
    <>
      <PaperProvider>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.outerContainer}>
              <View style={styles.container}>
                {category == 'soup' ? (
                  <View>
                    <View style={styles.headText}>
                      <Text>Soup</Text>
                    </View>
                    {listData
                      .filter(item => item.category == 'soup')
                      .map((item, key) => (
                        <LISTFOOD
                          key={key}
                          name={item.title}
                          image={item.image}
                          category={item.category}
                        />
                      ))}
                  </View>
                ) : category == 'chicken' ? (
                  <View>
                    <View style={styles.headText}>
                      <Text>Chicken</Text>
                    </View>
                    {listData
                      .filter(item => item.category == 'chicken')
                      .map((item, key) => (
                        <LISTFOOD
                          key={key}
                          name={item.title}
                          image={item.image}
                          category={item.category}
                        />
                      ))}
                  </View>
                ) : category == 'seafood' ? (
                  <View>
                    <View style={styles.headText}>
                      <Text>Seafood</Text>
                    </View>
                    {listData
                      .filter(item => item.category == 'seafood')
                      .map((item, key) => (
                        <LISTFOOD
                          key={key}
                          name={item.title}
                          image={item.image}
                          category={item.category}
                        />
                      ))}
                  </View>
                ) : category == 'dessert' ? (
                  <View>
                    <View style={styles.headText}>
                      <Text>Dessert</Text>
                    </View>
                    {listData
                      .filter(item => item.category == 'dessert')
                      .map((item, key) => (
                        <LISTFOOD
                          key={key}
                          name={item.title}
                          image={item.image}
                          category={item.category}
                        />
                      ))}
                  </View>
                ) : null}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#ffffe5',
    height: 1000,
  },
  container: {
    margin: 30,
    backgroundColor: '#ffffe5',
    height: 1000,
  },
  headText: {
    alignItems: 'center',
  },
});

export default PopulraScreen;
