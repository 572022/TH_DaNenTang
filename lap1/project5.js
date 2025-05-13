import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    // hàng ngang
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Square = ({ text, bgColor = "black" , tcolor="#fff"}) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={{color:tcolor}}>{text}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="red" color="" />
      <Square text="Square 3" bgColor="green" />
    </View>
  );
}
