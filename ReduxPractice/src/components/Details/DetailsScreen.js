import {updateExpression} from '@babel/types';
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default HomeScreen = ({navigation, count, changeCount}) => {
  //const [count, setCount] = useState(0);
  const up = () => {
    //setCount(count + 1);
    changeCount(count + 1);
  };
  const down = () => {
    //setCount(count - 1);
    changeCount(count - 1);
  };
  const gotoDetails = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <Button onPress={() => up()} title="up"></Button>
      <Text style={styles.text}>{count}</Text>
      <Button onPress={() => down()} title="down"></Button>
      <Button onPress={() => gotoDetails()} title="Go to Home" color="black" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
