import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header({ title }) {
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerText: {
    color: "#333",
    fontFamily: "font-bold",
    fontSize: 25,
  },
});
