import React, { useState, useEffect } from "react";
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
import { Button, Card } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../redux/actions/auth";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function AddAddress({ navigation }) {
  const initialState = {
    city: "Torronto",
    province: "",
    street: "",
    postalCode: "",
  };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addAddress(formData, navigation));
  };
  return (
    <ScrollView>
      {console.log(formData)}
      <ImageBackground
        source={require("../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Logincard }}>
          <Text style={{ ...styles.titleText }}>Add Pickup Address</Text>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>City</Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  city: text,
                })
              }
              style={styles.input}
            />
            <Text style={{ ...styles.inputCity }}>
              *Surrey, Richmond, Langley, Delta, White Rock, Coquitlam, New
              Westminster, Vancouver, Burnaby
            </Text>
            <Text style={{ ...styles.inputHeading }}>Province</Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  province: text,
                })
              }
              style={styles.input}
            />
            <Text style={{ ...styles.inputHeading }}>Street Address</Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  street: text,
                })
              }
              style={styles.input}
            />
            <Text style={{ ...styles.inputHeading }}>Postal Code</Text>
            <TextInput
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  postalCode: text,
                })
              }
              style={styles.input}
            />
          </View>
          <Button
            title="Add"
            onPress={handleSubmit}
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
    paddingTop: 15,
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
  inputCity: {
    color: "#212529",
    fontSize: 12,
    fontFamily: "font-demi",
  },
  inputDiv: {
    paddingTop: 20,
    paddingBottom: 40,
  },
});
