import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default function Logout({ navigation }) {
  const logOut = () => {
    AsyncStorage.removeItem("token").then(() => {
      alert("Logged out Successfully");
    });
  };
  return (
    <>
      <View style={styles.logoutCard}>
        <Button
          onPress={logOut}
          title="Logout"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#730fe4",
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 16,
  },
  logoutCard: {
    padding: 20,
  },
});
