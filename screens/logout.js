import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default function Logout({ navigation }) {
  useEffect(() => {
    AsyncStorage.removeItem("token").then(() => {
      AsyncStorage.removeItem("userProfile").then(() => {
        alert("Logged out Successfully");
        navigation.navigate("Home");
      });
    });
  }, []);

  return <></>;
}
