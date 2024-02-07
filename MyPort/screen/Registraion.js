import React from 'react';
import { View, Text } from 'react-native';
// import { TextInput , PaperTextInput, Button } from 'react-native' 

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <Text>SignUp Screen</Text>
      <PaperTextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <PaperTextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <PaperButton mode="contained" onPress={() => navigation.navigate('Login')}>
        Sign Up
      </PaperButton>
    </View>
  );
};

export default SignUpScreen;

