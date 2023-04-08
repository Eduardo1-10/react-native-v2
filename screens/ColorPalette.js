import { React } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
  const { colors, title } = route.params;
  return (
    <SafeAreaView style={styles.regContainer}>
      <View style={styles.contentContainer}>
        <FlatList
          data={colors}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 2,
    paddingHorizontal: 10,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  regContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headlineText: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ColorPalette;
