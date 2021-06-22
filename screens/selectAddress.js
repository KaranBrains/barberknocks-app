import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../redux/actions/auth";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function SelectAddress({ navigation, route }) {
  const [address, setAddress] = useState([]);
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const handlePress = () => {
    navigation.navigate("AddAddress", { id: val });
  };
  useEffect(() => {
    dispatch(getUserByEmail());
  }, [navigation]);

  const radio_props = [
    { label: "param1", value: 0 },
    { label: "param2", value: 1 },
  ];
  const handleSubmit = () => {
    navigation.navigate("Payment", { id: route?.params.id });
  };
  let user = useSelector((state) => state.main?.authData?.user);
  let a = [];
  useEffect(() => {
    user?.address?.map((add) => {
      add &&
        a.push({
          label: `${add.street} ${add.city} ${add.postalCode} ${add.province}`,
          value: `${add._id}`,
        });
    });
    setAddress(a);
  }, []);
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
                Please select the pickup address
              </Text>
              <RadioForm
                radio_props={address}
                buttonInnerColor={"#730fe4"}
                buttonSize={10}
                buttonOuterSize={20}
                onPress={(value) => {
                  setVal(value);
                }}
              />
              {!user && <Text style={styles.noSlots}>No address</Text>}
              <Button
                onPress={handleSubmit}
                title="Continue"
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
              />
            </View>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.touchbutton}>Not in the list ? Add New </Text>
            </TouchableOpacity>
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
  noSlots: {
    color: "#730fe4",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
    fontFamily: "font-bold",
  },
});
