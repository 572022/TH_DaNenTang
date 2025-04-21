import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
} from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 24,
      backgroundColor: "#fdfdfd",
      flex: 1,
    },
    label: {
      fontWeight: "600",
      fontSize: 20,
      color: "#333",
      marginBottom: 8,
      paddingTop: 30,
    },
    input: {
      backgroundColor: "#f0f0f0",
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 20,
      fontSize: 16,
      color: "#000",
      
    },
 
  });
  

export default () => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <Button
        title="Say Hello"
        onPress={() => {
          alert(`Xin chào, ${name || "Stranger"}!`);
          setName("");
        }}
      />
    </View>
  );
};
