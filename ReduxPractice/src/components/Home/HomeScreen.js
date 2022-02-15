import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default HomeScreen = ({
  navigation,
  count,
  changeCount,
  number,
  changeNum,
}) => {
  //const [count, setCount] = useState(0);

  const up = () => {
    //setCount(count + 1);
    const newCount = count + 1;
    changeCount(newCount);
  };
  const down = () => {
    //setCount(count - 1);
    changeCount(count - 1);
  };
  const gotoDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <SafeAreaView>
      <Button onPress={() => up()} title="up"></Button>
      <Text style={styles.text}>{count}</Text>
      <Button onPress={() => down()} title="down"></Button>
      <View style={{marginVertical: 10, borderWidth: 1}}></View>
      <Button
        onPress={() => {
          changeNum(number + 2);
        }}
        title="up"></Button>
      <Text style={styles.text}>{number}</Text>
      <Button onPress={() => changeNum(number - 2)} title="down"></Button>
      <View style={{marginVertical: 10, borderWidth: 1}}></View>
      <Button
        onPress={() => gotoDetails()}
        title="Go to Details"
        color="black"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
