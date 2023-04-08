import { React, useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";
import ColorPreview from "../components/ColorPreview";

const Home = ({ navigation, route }) => {
  const [COLORS, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const addedColorPalette = route.params
    ? route.params.addedColorPalette
    : undefined;

  const fetchColors = useCallback(async () => {
    const response = await fetch(
      "https://color-palette-api.kadikraman.now.sh/palettes"
    );
    if (response.ok) {
      const colors = await response.json();
      setColors(colors);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColors();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    fetchColors();
  }, []);

  useEffect(() => {
    if (addedColorPalette) {
      addedColorPalette.id = COLORS.length.toString();
      setColors((colors) => [addedColorPalette, ...colors]);
    }
  }, [addedColorPalette]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          style={styles.container}
          data={COLORS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ColorPreview
              NumPrevSquares={5}
              OnPress={() =>
                navigation.navigate("ColorPalette", {
                  colors: item.colors,
                  title: item.paletteName,
                })
              }
              colorItem={item}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      </View>
      <TouchableOpacity
        style={styles.titleWrap}
        onPress={() => navigation.navigate("AddNewPalette")}
      >
        <Text style={styles.title}>Add New Color Scheme</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    backgroundColor: "#5f9EA0",
    padding: 10,
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 2,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "white",
  },
  previewContainer: {
    flexDirection: "row",
  },
  titleWrap: {
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fafafa",
  },
});
export default Home;
