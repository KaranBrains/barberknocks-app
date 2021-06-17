import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-elements";
import { globalStyles } from "../styles/global";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function Signup({ navigation }) {
  return (
    <ScrollView>
      <View style={{ ...styles.Signupcard }}>
        <Text style={{ ...styles.titleText }}>User Profile</Text>
        <View style={{ ...styles.inputDiv }}>
          <Text style={{ ...styles.inputHeading }}>Full Name</Text>
          <TextInput editable={false} style={styles.input} textContentType="none" />
          <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
            Email
          </Text>
          <TextInput editable={false} style={styles.input} textContentType="emailAddress" />
          <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
            Phone Number
          </Text>
          <TextInput editable={false} style={styles.input} textContentType="none" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: "100%",
  },
  Signupcard: {
    padding: 20,
    margin: 20,
    minHeight: ScreenHeight / 2,
    backgroundColor: "white",
    marginTop: 40,
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 40,
    color: "#420a83",
    textAlign: "center",
  },
  inputHeading: {
    color: "#420a83",
    fontSize: 18,
    fontFamily: "font-demi",
  },
  input: {
    backgroundColor: "#f3effd",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
  },
  passwordDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  inputDiv: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  paddingTop: {
    paddingTop: 10,
  },
});