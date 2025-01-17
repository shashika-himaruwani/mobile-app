import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
  FlatList,
  View,
  Modal,
  ScrollView,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '4a1e2d3f-6c12-45b5-ae34-27fbc93d7e90',
    title: 'Fourth Item',
  },
  {
    id: '7b5e6c9a-8f45-4b9b-9d62-b4e9fd8c13f2',
    title: 'Fifth Item',
  },
  {
    id: '1a2b3c4d-5e6f-7890-1234-56789abcdef0',
    title: 'Sixth Item',
  },
  {
    id: '9f8e7d6c-5b4a-3d2f-1e0f-9876543210ab',
    title: 'Seventh Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Define the handlePress function
  const handlePress = message => {
    Alert.alert(message);
  };

  return (
    <ScrollView style={styles.scrollView}>
    <SafeAreaView style={styles.container}>

      <Text style={styles.title1}>Hello First React Native Project</Text>

      {/* Button Component */}
      <Button
        title="Press Me"
        onPress={() => handlePress('Button Pressed')}
        color="blue"
      />

      {/* TouchableHighlight */}
      <TouchableHighlight
        style={styles.touchableHighlight}
        underlayColor="lightblue"
        onPress={() => handlePress('TouchableHighlight Pressed')}>
        <Text style={styles.touchableText}>Touchable Highlight</Text>
      </TouchableHighlight>

      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => handlePress('TouchableOpacity Pressed')}>
        <Text style={styles.touchableText}>Touchable Opacity</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
        <Text style={styles.btntext}>Press Here</Text>
      </TouchableOpacity>

      <Image
        style={styles.tinyLogo1}
        source={require('../../assests/images.jpg')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true} // password
        placeholder="Enter some text"
        keyboardType="numeric"
      />
      

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
     
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
      },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#4a1f24',
    marginVertical: 10,
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#4e59ad',
    marginVertical: 10,
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title1: {
    backgroundColor: '#eb718f',
    width: 400,
    padding: 10,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  touchableHighlight: {
    backgroundColor: '#ca71eb',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  touchableText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  tinyLogo: {
    margin: 10,
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
