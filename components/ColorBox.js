import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
  const styles = StyleSheet.create({
    box: {
      flex: 1,
      color:
        parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
          ? "black"
          : "white",
      padding: 10,
      fontWeight: "bold",
      fontSize: 14.5,
      textAlign: "center",
      marginBottom: 15,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      elevation: 3,
    },
  });
  return (
    <View>
      <Text style={[styles.box, { backgroundColor: hexCode }]}>
        {`${colorName} ${hexCode}`}
      </Text>
    </View>
  );
};

export default ColorBox;
