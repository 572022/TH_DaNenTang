import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',      
      }}
    >
      <Button title="Button 1" onPress={() => alert('hello 1')} />
      <TouchableOpacity
        onPress={() => alert('hello 2')}
        style={{
          padding: 10,
          alignItems: 'center',
          marginTop: 10,
          width: 200,
        }}
      >
        <Text style={{ color: 'blue', fontSize: 20 }}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
