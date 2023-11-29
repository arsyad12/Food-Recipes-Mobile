/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {PaperProvider, Button} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

function DetailRecipes() {
  const [lineChoice, setLineChoice] = React.useState('ingredients');

  const choiceHandler = () => {
    setLineChoice(true);
  };

  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View>
              <Image
                source={require('../asset/food1.jpg')}
                style={{
                  width: 400,
                  height: 400,
                  position: 'absolute',
                }}
              />
            </View>

            <View style={styles.overlay} />

            <View style={styles.arrow}>
              <Icon name="angle-left" size={35} color="white" />
            </View>

            <View style={styles.containerFoodName}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 600}}>
                Soup Seafood
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                backgroundColor: '#ffffe5',
                height: 500,
                borderRadius: 20,
              }}
            />
            <View style={styles.containerText}>
              <Button
                onPress={() => setLineChoice('ingredients')}
                labelStyle={{
                  fontSize: 15,
                  ...(lineChoice === 'ingredients'
                    ? {
                        paddingBottom: 4,
                        color: 'black',
                        borderBottomColor: 'yellow',
                        borderBottomWidth: 3,
                      }
                    : {color: 'grey'}),
                }}>
                Ingredients
              </Button>
              <Button
                onPress={() => setLineChoice('video step')}
                labelStyle={{
                  fontSize: 15,
                  ...(lineChoice === 'video step'
                    ? {
                        paddingBottom: 4,
                        color: 'black',
                        borderBottomColor: 'yellow',
                        borderBottomWidth: 3,
                      }
                    : {color: 'grey'}),
                }}>
                Video Step
              </Button>
            </View>

            <View style={styles.containerVidImg}>
              {lineChoice === 'video step' ? (
                <>
                  <View>
                    <Image source={require('../asset/vid.png')} />
                  </View>
                  <View>
                    <Text style={styles.textDescription}>
                      CARA MEMBUAT SOP SEAFOOD YANG MUDAH
                    </Text>
                    <Text style={styles.textLink}>
                      https://www.youtube.com/watch?v=N2aRUxLK1_s
                    </Text>
                  </View>
                </>
              ) : null}
              {lineChoice === 'ingredients' ? (
                <>
                  <Text style={styles.textIngredient}>
                    - 2 slices whole-grain bread (bakery-fresh recommended)
                    {'\n'} - 1 tablespoon hummus - 2 slices tomato - 1/2 small
                    {'\n'} cucumber, thinly sliced lengthwise {'\n'} - 1 slice
                    low-fat cheese
                  </Text>
                </>
              ) : null}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  arrow: {
    margin: 15,
    height: 340,
  },

  overlay: {
    width: 400,
    height: 400,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.2,
  },

  containerFoodName: {
    position: 'absolute',
    paddingTop: 310,
    paddingLeft: 30,
  },

  containerText: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 15,
  },

  containerLine: {
    position: 'absolute',
    paddingLeft: 30,
    paddingTop: 20,
  },

  containerLine2: {
    position: 'absolute',
    paddingLeft: 130,
    paddingTop: 20,
  },

  containerVidImg: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 65,
    flexDirection: 'row',
    gap: 15,
  },
  textDescription: {
    paddingRight: 160,
    textAlign: 'justify',
  },

  textLink: {
    paddingTop: 5,
    paddingRight: 160,
    textAlign: 'justify',
    fontSize: 11,
    color: 'grey',
  },

  textIngredient: {
    paddingRight: 20,
    textAlign: 'justify',
  },
});

export default DetailRecipes;
