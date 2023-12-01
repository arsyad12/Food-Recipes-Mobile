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
  Linking, //untuk redirect ke link url
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function DetailRecipes({navigation, route}) {
  //route berguna untuk menampung data yang dikirim dari homscreen saat navigasi
  const {image, title, ingredients, video} = route.params;

  const [lineChoice, setLineChoice] = React.useState('ingredients');

  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View>
              <Image
                source={{uri: image}}
                style={{
                  width: 400,
                  height: 400,
                  position: 'absolute',
                }}
              />
            </View>

            <View style={styles.overlay} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View style={styles.arrow}>
                <Icon name="angle-left" size={35} color="white" />
              </View>
            </TouchableOpacity>

            <View style={styles.containerFoodName}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 600}}>
                {title}
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
                        borderBottomColor: 'orange',
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
                        borderBottomColor: 'orange',
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
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(video?.link);
                      }}>
                      <Image source={require('../asset/vid.png')} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.textDescription}>{video?.title}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(video?.link);
                      }}>
                      <Button style={styles.buttonLink}>
                        <Text style={{color: 'grey', fontSize: 11}}>
                          {video?.link}
                        </Text>
                      </Button>
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}
              {lineChoice === 'ingredients' ? (
                <>
                  <Text style={styles.textIngredient}>{ingredients}</Text>
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

  containerVidImg: {
    position: 'absolute',
    marginLeft: 25,
    marginTop: 65,
    flexDirection: 'row',
    gap: 15,
  },
  textDescription: {
    paddingTop: 7,
    paddingRight: 160,
    textAlign: 'justify',
  },

  buttonLink: {
    paddingTop: 1,
    width: 300,
    position: 'absolute',
    left: -21,
    top: -5,
  },

  textIngredient: {
    paddingRight: 20,
    textAlign: 'justify',
  },
});

export default DetailRecipes;
