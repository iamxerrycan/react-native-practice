import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

export default LoginScreen;
