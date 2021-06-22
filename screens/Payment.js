import React, { useState } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Button } from "react-native-elements";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function Payment({ navigation, route }) {
  const id = route?.params?.id;
  const handleSubmit = () => {
    navigation.navigate("BookingsDetails", { id });
  };
  const radio_props = [
    { label: "Cash", value: 0 },
    { label: "Pay Online", value: 1 },
  ];
  return (
    <View>
      <ScrollView>
        {
          <ImageBackground
            source={require("../assets/bg_1.jpg")}
            style={{ ...styles.header }}
          >
            <View style={{ ...styles.Signupcard }}>
              <Text style={{ ...styles.titleText }}>
                Please select the mode of payment..
              </Text>
              <RadioForm
                radio_props={radio_props}
                buttonInnerColor={"#730fe4"}
                buttonSize={10}
                buttonOuterSize={25}
                onPress={(value) => {
                  console.log(value);
                }}
              />
              <Button
                onPress={handleSubmit}
                title="Confirm"
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
              />
            </View>
          </ImageBackground>
        }
      </ScrollView>
    </View>
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
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  Signupcard: {
    padding: 20,
    width: "90%",
    backgroundColor: "white",
    marginTop: 40,
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 25,
    color: "#420a83",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#730fe4",
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "stretch",
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 16,
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
  touchbutton: {
    paddingTop: 15,
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "font-demi",
    marginBottom: 40,
  },
  paddingTop: {
    paddingTop: 10,
  },
});
