import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingVertical: 20,
      alignItems:"center",
    },
    box: {
      width: 100,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      margin: 20,

      borderRadius: 12,
    },
  });

const Square = ({ text, bgColor = "#C6E2FF" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
      <Text>{text}</Text>
    </View>
  );

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  export default () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((item, index) => (
          <Square key={item} text={`Square ${index + 1}`} />
        ))}
      </ScrollView>
    );
  };