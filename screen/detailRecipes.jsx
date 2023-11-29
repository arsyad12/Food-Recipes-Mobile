/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

function DetailRecipes() {
  const [lineChoice, setLineChoice] = React.useState(false);

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
              <TouchableOpacity onPress={() => choiceHandler()}>
                <Text>Ingredients</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => choiceHandler()}>
                <Text onPress={() => setLineChoice(!false)}>Video Step</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerLine}>
              <Ionicon name="remove-outline" size={100} color="orange" />
            </View>
            <View style={styles.containerLine2}>
              <Ionicon name="remove-outline" size={100} color="orange" />
            </View>

            <View style={styles.containerVidImg}>
              {lineChoice ? (
                <>
                  <Image source={require('../asset/vid.png')} />
                  <Text style={styles.textDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates vitae id deserunt commodi reprehenderit a alias
                    sint. Sapiente, illum repudiandae. Ut nulla illum qui enim
                    facere sapiente at voluptatibus maxime!
                  </Text>
                </>
              ) : (
                <Text style={styles.textIngredient}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptates vitae id deserunt commodi reprehenderit a alias
                  sint. Sapiente, illum repudiandae. Ut nulla illum qui enim
                  facere sapiente at voluptatibus maxime!
                </Text>
              )}
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
    gap: 10,
  },

  containerLine: {
    position: 'absolute',
    paddingLeft: 2,
    top: -9,
  },

  containerLine2: {
    position: 'absolute',
    paddingLeft: 80,
    top: -9,
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

  textIngredient: {
    paddingRight: 20,
    textAlign: 'justify',
  },
});

export default DetailRecipes;
