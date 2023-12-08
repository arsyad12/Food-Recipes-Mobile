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

function PopulraScreen(navigation) {
  return (
    <>
      <PaperProvider>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.outerContainer}>
              <View style={styles.container}>
                <View style={styles.headText}>
                  <Text>Soup</Text>
                </View>

                <View>
                  <LISTFOOD />
                </View>
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
