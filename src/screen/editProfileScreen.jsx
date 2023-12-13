/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import {PaperProvider, Button, TextInput} from 'react-native-paper';

function EditProfileScreen() {
  const [text, setText] = React.useState('');
  return (
    <>
      <PaperProvider>
        <SafeAreaView>
          <View style={styles.outContainer}>
            <View style={styles.container}>
              <View>
                <Text
                  style={{fontSize: 20, textAlign: 'center', color: 'orange'}}>
                  Edit Profile
                </Text>
              </View>

              <View>
                <View style={styles.containerFormInput}>
                  <View>
                    <TextInput
                      style={{width: 200}}
                      label="Name"
                      mode="outlined"
                      value={text}
                      onChangeText={text => setText(text)}
                    />
                  </View>

                  <View>
                    <Button
                      style={styles.buttonUpdate}
                      onPress={() => console.log('Pressed')}>
                      Update
                    </Button>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.containerFormInput}>
                  <View>
                    <TextInput
                      style={{width: 200}}
                      label="Password"
                      mode="outlined"
                      secureTextEntry
                      right={<TextInput.Icon icon="eye" />}
                      value={text}
                      onChangeText={text => setText(text)}
                    />
                  </View>

                  <View>
                    <Button
                      style={styles.buttonUpdate}
                      onPress={() => console.log('Pressed')}>
                      Update
                    </Button>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.containerFormInput}>
                  <View>
                    <TextInput
                      style={{width: 200}}
                      label="Photo"
                      mode="outlined"
                      value={text}
                      onChangeText={text => setText(text)}
                    />
                  </View>

                  <View>
                    <Button
                      style={styles.buttonUpdate}
                      onPress={() => console.log('Pressed')}>
                      Update
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: '#ffffe5',
    height: 1000,
  },

  outContainer: {
    backgroundColor: '#ffffe5',
  },

  containerFormInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 15,
  },

  buttonUpdate: {
    backgroundColor: 'orange',
    borderRadius: 5,
    width: 100,
    marginTop: 3,
  },
});

export default EditProfileScreen;
