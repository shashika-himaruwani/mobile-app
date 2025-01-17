import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Avatar, Divider} from 'react-native-paper';

const PaperComponent = () => {
  return (
    <View>
      <Text>Paper Component</Text>
      <Divider style={styles.dividor} />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Divider style={styles.dividor} />
      <Avatar.Image size={54} source={require('../../assests/avatar.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  dividor: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PaperComponent;
