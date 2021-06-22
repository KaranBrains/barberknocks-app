import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { forgotEmailOtp } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-elements";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function ForgotEmail({ navigation }) {
  const initialState = { email: "" };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(forgotEmailOtp(formData, navigation)).then(() => {});
    setformData(initialState);
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Logincard }}>
          <Text style={{ ...styles.titleText }}>
            Enter the E-mail associated with your account
          </Text>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Email</Text>
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
          </View>
          <Button
            title="Send OTP"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={handleSubmit}
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
    paddingTop: 20,
    paddingBottom: 40,
  },
});
