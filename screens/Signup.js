import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-native-elements";
import { globalStyles } from "../styles/global";
import { signUp } from "../redux/actions/auth";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function Signup({ navigation }) {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    dialcode: "+91",
  };
  const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      alert("Error saving data");
    }
  };
  const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        console.log("Data saved");
        console.log(value);
        return value;
      }
    } catch (error) {
      alert("Error retrieving data");
    }
  };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const handlePressLogin = () => {
    navigation.navigate("Login");
    _retrieveData("userProfile");
  };
  const handleSubmit = () => {
    formData.phone = formData.dialcode + formData.phone;
    dispatch(signUp(formData, navigation)).then(() => {
      setformData(initialState);
    });
    _storeData("userProfile", JSON.stringify(formData));
  };
  return (
    <ScrollView>
      {console.log(formData)}
      <ImageBackground
        source={require("../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Signupcard }}>
          <Text style={{ ...styles.titleText }}>
            Welcome to Barberknocks, Signup here...
          </Text>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Full Name</Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  fullName: text,
                })
              }
              style={styles.input}
              textContentType="none"
            />
            <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
              Email
            </Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  email: text,
                })
              }
              style={styles.input}
              textContentType="emailAddress"
            />
            <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
              Phone Number
            </Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  phone: text,
                })
              }
              style={styles.input}
              textContentType="none"
            />
            <View style={{ ...styles.passwordDiv }}>
              <Text style={{ ...styles.inputHeading }}>Password</Text>
            </View>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  password: text,
                })
              }
              style={styles.input}
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
          <Button
            onPress={handleSubmit}
            title="Signup"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>
        <TouchableOpacity onPress={handlePressLogin}>
          <Text style={styles.touchbutton}>Already a member ? Signin </Text>
        </TouchableOpacity>
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
    minHeight: ScreenHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  Signupcard: {
    padding: 20,
    width: "90%",
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
  button: {
    backgroundColor: "#730fe4",
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
