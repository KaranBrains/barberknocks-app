import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { contactUs } from "../redux/actions/contact";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function Contact({ navigation }) {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(contactUs(formData, navigation));
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Logincard }}>
          <Text style={{ ...styles.titleText }}>Get in Touch</Text>
          <Text
            style={{
              fontFamily: "font-regular",
              fontSize: 14,
              color: "#420a83",
              marginTop: 7,
              textAlign: "center",
            }}
          >
            How can we help you out? If you fill out the form below, we will try
            to get back to you ASAP!
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              fontFamily: "font-regular",
              fontSize: 12,
              color: "#420a83",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Fields marked with an asterisk (*) are required.
          </Text>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Name</Text>
            <TextInput
              style={styles.input}
              textContentType="name"
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  name: text,
                })
              }
            />
          </View>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Email</Text>
            <TextInput
              style={styles.input}
              textContentType="emailAddress"
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  email: text,
                })
              }
            />
          </View>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Message</Text>
            <TextInput
              style={styles.input}
              textContentType="none"
              multiline={true}
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  message: text,
                })
              }
            />
          </View>
          <Button
            title="Submit"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={handlePress}
          />
        </View>
      </ImageBackground>
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
    height: ScreenHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  Logincard: {
    padding: 20,
    width: "90%",
    minHeight: ScreenHeight / 2,
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 30,
    color: "#420a83",
    textAlign: "center",
  },
  button: {
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: "#730fe4",
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 16,
  },
  inputHeading: {
    color: "#420a83",
    fontSize: 16,
    fontFamily: "font-demi",
  },
  input: {
    backgroundColor: "#f3effd",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
  },
  inputDiv: {
    paddingTop: 10,
  },
});
