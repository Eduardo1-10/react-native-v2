import React, { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";

const ColorBox = ({ color, colors, setColors }) => {
  const { colorName, hexCode } = color;
  const toggleSwitch = useCallback(() => {
    if (
      colors.filter((colorItem) => colorItem.hexCode === hexCode).length > 0
    ) {
      setColors(colors.filter((colorItem) => colorItem.hexCode !== hexCode));
    } else {
      setColors([...colors, { colorName: colorName, hexCode: hexCode }]);
    }
  }, [colors]);

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            backgroundColor: hexCode,
          },
          styles.prev,
        ]}
      />
      <Text style={[styles.box]}>{`${colorName} ${hexCode}`}</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={!!colors.find((colorItem) => colorItem.hexCode === hexCode)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  box: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 14.5,
    marginLeft: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
  prev: {
    height: 30,
    width: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
});
export default ColorBox;
