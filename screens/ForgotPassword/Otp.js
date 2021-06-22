import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { verifyForgotEmailOtp } from "../../redux/actions/auth";
import { Button } from "react-native-elements";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function ForgotOtp({ navigation }) {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (otp) {
      dispatch(verifyForgotEmailOtp(otp.toString(), navigation));
    }
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Logincard }}>
          <Text style={{ ...styles.titleText }}>
            Please enter the verification code on your email
          </Text>
          <View style={{ ...styles.inputDiv }}>
            <TextInput
              onChangeText={(text) => setOtp(text)}
              style={styles.input}
              maxLength={6}
              keyboardType="numeric"
            />
          </View>
          <Button
            onPress={handleSubmit}
            title="Continue"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
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
