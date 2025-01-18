import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import PaperComponent from './src/screens/PaperComponent/PaperComponent';
import DrawerPage from './src/screens/DrawerPage/DrawerPage';
import FacebookClone from './src/screens/FacebookClone.js/FacebookClone';

const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen  name="Login" component={Login} options={{ headerShown: false }} />
    //     <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
    //     <Stack.Screen name="DrawerPage" component={DrawerPage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <FacebookClone/>
    // <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;