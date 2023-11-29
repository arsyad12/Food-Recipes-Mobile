import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {SafeAreaView, ScrollView, Text} from 'react-native';

function DetailRecipes() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <Text>Holla recipes</Text>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default DetailRecipes;
