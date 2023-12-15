/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import {PaperProvider, Button, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditProfileScreen() {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [docId, setDocId] = React.useState('');

  console.log(`ini data : ${docId}`);

  React.useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem('idDoc');
      setDocId(JSON.parse(id));
    })();
  }, []);

  const btnUpdateHandler = () => {
    firestore()
      .collection('user')
      .doc(docId)
      .update({
        username: name,
      })
      .then(() => {
        console.log('User updated!');
      });
  };

  return (
    <>
      <PaperProvider>
        <SafeAreaView>
          <View style={styles.outContainer}>
            <View style={styles.container}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'orange',
                  }}>
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
                      value={name}
                      onChangeText={name => setName(name)}
                    />
                  </View>

                  <View>
                    <Button
                      style={styles.buttonUpdate}
                      onPress={() => btnUpdateHandler()}>
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
                      value={pass}
                      onChangeText={pass => setPass(pass)}
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
                      label="Email"
                      mode="outlined"
                      value={email}
                      onChangeText={email => setEmail(email)}
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
