import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      backgroundColor: 'red',
      alignSelf: 'center',
      padding: 15,
      margin: 10,
      borderRadius:5,
      ...props.buttonStyle,
    }}>
    <Text style={{ color: '#fff' }}>{props.text}</Text>
  </TouchableOpacity>
);

export default function Lap2Project2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button text="Say hello" onPress={() => alert('hello!')} />
      <Button
        text="Say goodbye"
        onPress={() => alert('goodbye!')}
        buttonStyle={{ backgroundColor: 'green' }}
      />
    </View>
  );
}
