import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Button, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Platform 
} from 'react-native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Register Pressed:', { name, email, password });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <Text style={styles.header}>Register</Text>

          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter Full Name"
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

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Confrim Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Register"
              color="#6200EE"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
          <View style={styles.buttonContainer}>
             <Button
              title="Login"
              color="#6200EE"
              onPress={() => navigation.navigate('Login')}
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

export default Register;
