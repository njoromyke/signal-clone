import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerBackTitle: 'Back to Login',
  //   });
  // }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            'https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png',
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus
          type='text'
        />
        <Input
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoFocus
          type='email'
          autoCapitalize='none'
        />
        <Input
          placeholder=' Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoFocus
          type='password'
        />
        <Input
          placeholder=' Profile picture Url[optional]'
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          autoFocus
          type='text'
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        title='Register'
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
