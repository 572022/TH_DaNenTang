import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{
        flex: 1, // thêm nếu bạn muốn căn giữa cả màn hình
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ color: '#fff' }}>Hello xin chào</Text>
      </View>
    </View>
  );
};

export default App;
