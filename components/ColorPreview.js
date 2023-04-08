import { React } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ColorPreview = ({ colorItem, OnPress, NumPrevSquares }) => {
  const { paletteName, colors } = colorItem;
  return (
    <TouchableOpacity style={styles.previewWrap} onPress={OnPress}>
      <Text style={styles.title}>{paletteName}:</Text>
      <FlatList
        style={styles.previewContainer}
        data={colors.slice(0, NumPrevSquares)}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View
            style={[
              styles.preview,
              {
                backgroundColor: item.hexCode,
              },
            ]}
          />
        )}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  previewWrap: {
    paddingBottom: 15,
    marginBottom: 5,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  previewContainer: {
    flexDirection: "row",
  },
  preview: {
    width: 30,
    height: 30,
    marginRight: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorPreview;
