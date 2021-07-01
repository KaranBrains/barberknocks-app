import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#333",
    fontFamily: "font-bold",
    fontSize: 25,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});
