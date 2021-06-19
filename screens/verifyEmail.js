import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { Button, Card } from "react-native-elements";
import { verifyEmailOtp, emailOtp } from "../redux/actions/auth";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function VerifyEmail({ navigation }) {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (otp) {
      dispatch(verifyEmailOtp(otp.toString(), navigation));
    }
  };
  const resendOtp = () => {
    dispatch(emailOtp());
  };
  return (
    <ScrollView>
      {console.log(otp)}
      <View style={{ ...styles.header }}>
        <View style={{ ...styles.Signupcard }}>
          <View style={{ ...styles.stepDiv }}>
            <Button
              title="1"
              buttonStyle={styles.stepButton1}
              titleStyle={styles.stepText}
            />
            <Text style={{ ...styles.stepDivConnect }}></Text>
            <Button
              title="2"
              buttonStyle={styles.stepButton2}
              titleStyle={styles.stepText}
            />
          </View>
          <View style={styles.stepTextDiv}>
            <Text style={{ ...styles.stepText1and2 }}>Step 1</Text>
            <Text style={{ ...styles.stepConnect }}></Text>
            <Text style={{ ...styles.stepText1and2 }}>Step 2</Text>
          </View>
          <Text style={{ ...styles.titleText }}>
            Please enter the verification code on your email.
          </Text>
          <View style={{ ...styles.inputDiv }}>
            <TextInput
              onChangeText={(text) => setOtp(text)}
              style={styles.input}
              maxLength={6}
              keyboardType="numeric"
            />
          </View>
          <View style={{ ...styles.buttonDiv }}>
            <Button
              onPress={handleSubmit}
              title="Continue"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
        </View>
        <TouchableOpacity onPress={resendOtp}>
          <Text style={styles.touchbutton}>
            Did not recieve the OTP yet? Send Again
          </Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    backgroundColor: "#ffffff",
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 16,
  },
  buttonDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    paddingTop: 30,
    paddingBottom: 30,
  },
  touchbutton: {
    paddingTop: 15,
    color: "#420a83",
    fontSize: 16,
    fontFamily: "font-demi",
    marginBottom: 40,
  },
  paddingTop: {
    paddingTop: 10,
  },
  stepDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
  },
  stepButton1: {
    borderRadius: 48,
    width: 48,
    height: 48,
    backgroundColor: "#420a83",
  },
  stepButton2: {
    borderRadius: 48,
    width: 48,
    height: 48,
    backgroundColor: "#e0e0e0",
  },
  stepDivConnect: {
    width: "60%",
    height: 1,
    backgroundColor: "#420a83",
    marginLeft: 10,
    marginRight: 10,
  },
  stepTextDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    width: "100%",
  },
  stepConnect: {
    width: "60%",
    height: 1,
    backgroundColor: "#ffffff",
    marginLeft: 8,
    marginRight: 8,
  },
  stepText1and2: {
    color: "#420a83",
    fontSize: 16,
    fontFamily: "font-demi",
  },
});
