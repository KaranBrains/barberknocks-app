import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { Button, Card } from "react-native-elements";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function MyAddress({ navigation }) {
  const handlePress = () => {
    navigation.navigate("AddAddress");
  };
  return (
    <ScrollView>
      <View style={{ ...styles.header }}>
        <View style={{ ...styles.mainHeading }}>
          <Text style={{ ...styles.titleText }}>Add Address</Text>
          <Button
            title="+"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={handlePress}
          />
        </View>
        <View style={{ ...styles.bookingsDetailsCard }}>
          <View style={{ ...styles.inputDiv }}>
            <TextInput editable={false} style={styles.input} />
            <TextInput editable={false} style={styles.input} />
            <TextInput editable={false} style={styles.input} />
            <TextInput editable={false} style={styles.input} />
          </View>
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
  header: {
    flex: 1,
    width: "100%",
    minHeight: ScreenHeight,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 30,
    color: "#420a83",
    textAlign: "center",
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
  bookingsDetailsCard: {
    padding: 15,
    margin: "auto",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.125)",
    borderStyle: "solid",
    width: "90%",
    marginBottom: 15,
    marginTop: 10,
  },
  bookingsDetailsRow: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  bookingsDetailsQuestion: {
    color: "#420a83",
    fontFamily: "font-demi",
  },
  bookingsDetailsAnswer: {
    color: "#420a83",
    fontFamily: "font-bold",
    fontSize: 17,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  success: {
    backgroundColor: "#28a745",
    color: "#ffffff",
    borderRadius: 3,
  },
  danger: {
    backgroundColor: "#dc3545",
    color: "#ffffff",
    borderRadius: 3,
  },
  primary: {
    backgroundColor: "#007bff",
    color: "#ffffff",
    borderRadius: 3,
  },
  statusButton: {
    padding: 5,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingLeft: 10,
  },
  buttonText: {
    color: "#420a83",
    fontSize: 30,
  },
  mainHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
