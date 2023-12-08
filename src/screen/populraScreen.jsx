import React from 'react';

import {PaperProvider, Text} from 'react-native-paper';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import LISTFOOD from '../component/listFood';

function PopulraScreen(navigation) {
  return (
    <>
      <PaperProvider>
        <SafeAreaView>
          <View>
            <LISTFOOD />
          </View>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({});

export default PopulraScreen;
