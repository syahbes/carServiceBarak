import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyCarLocation from "./src/screens/MyCarLocation";
import SearchCity from "./src/screens/SearchCity";
import { useState } from "react";

export default function App() {
  const [showSearchCity, setShowSearchCity] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {showSearchCity ? (
        <SearchCity setShowSearchCity={setShowSearchCity} />
      ) : (
        <MyCarLocation setShowSearchCity={setShowSearchCity} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
