import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>
        You're pressing the button: {pressCount} time(s)
      </Text>

      <View style={{ width: 200 }}>
        <Button
          title="Press me"
          onPress={() => setPressCount(pressCount + 1)}
        />
      </View>
    </View>
  );
}
