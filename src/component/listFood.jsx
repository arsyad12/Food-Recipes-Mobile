import React from 'react';

import {Text} from 'react-native-paper';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

function listFood(navigation) {
  return (
    <>
      <View>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View>
              <Image
                style={styles.popularRecipesImg}
                source={require('../asset/food1.jpg')}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.textPopularRecipes}>Nasi Goyeng</Text>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  popularRecipesImg: {
    height: 64,
    width: 64,
    borderRadius: 10,
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

export default listFood;
