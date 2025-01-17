import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  TextInput, 
  StyleSheet, 
  Button, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    // Navigate to the next page (e.g., DrawerPage)
    navigation.navigate('DrawerPage');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <Text style={styles.header}>Login</Text>

          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter Username"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              color="#6200EE"
              onPress={() => navigation.navigate('DrawerPage')}
            />
            <View style={{ marginTop: 10 }} />
            <Button
              title="Register"
              color="#6200EE"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
    color: '#333',
  },
  buttonContainer: {
    width: '90%',
    marginTop: 10,
  },
});

export default Login;
