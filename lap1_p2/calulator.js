import { StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

const Calculator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

const bgColorFunction = darkMode ? "#414853" : "#B9D3EE";     
const bgColorNumber = darkMode ? "#303946" : "#f9fafb";         
const bgColorResult = darkMode ? "#282f3b" : "#e0f2fe";         
const bgColorThemeButton = darkMode ? "#7b8084" : "#cbd5e1";    
const textColorHistory = darkMode ? "#B5B7BB" : "#64748b";      
const colorIcon = darkMode ? "white" : "#0f172a";               


  const buttonsLeft = [
    ["C", "DEL"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, "."],
  ];

  const buttonsRight = ["/", "*", "-", "+", "="];
  const handleInput = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + value.toString());
    }
    Vibration.vibrate(10);
  };
  
  return (
    <View style={[styles.container, { backgroundColor: darkMode ? "#000" : "#fff" }]}>
      <View style={[styles.containerResult, { backgroundColor: bgColorResult }]}>
       {/* hiển thị giao diện sáng tối */}
        <TouchableOpacity
          onPress={() => setDarkMode(!darkMode)}
          style={[styles.themeButton, { backgroundColor: bgColorThemeButton }]}
        >
          <Entypo name={darkMode ? "light-up" : "moon"} size={24} color={colorIcon} />      
        </TouchableOpacity>
        
         <Text style={[styles.historyText, { color: textColorHistory }]}>
          {expression || "0"}
        </Text>
        <Text style={[styles.resultText, { color: darkMode ? "#fff" : "#000" }]}>
          {result || ""}
        </Text>

      </View>

      <View style={styles.containerButton}>
        <View style={[styles.containerButtonLeft, { backgroundColor: bgColorNumber }]}>
          {buttonsLeft.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((item, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  onPress={() => handleInput(item)}
                  style={[styles.button, { backgroundColor: typeof item === "string" ? bgColorFunction : bgColorNumber }]}
                >
                  <Text style={{ fontSize: 24 }}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <View style={[styles.containerButtonRight, { backgroundColor: bgColorFunction }]}>
          {buttonsRight.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleInput(item)} style={styles.button}>
              <Text style={{ fontSize: 24 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Calculator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerResult: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  historyText: {
    fontSize: 20,
    textAlign: "right",
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "right",
  },
  themeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 8,
  },
  containerButton: {
    flex: 2,
    flexDirection: "row",
    paddingTop: 10,
  },
  containerButtonLeft: {
    flex: 3,
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  containerButtonRight: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  button: {
    padding: 20,
    margin: 5,
    borderRadius: 10,
    minWidth: 60,
    alignItems: "center",
  },
});