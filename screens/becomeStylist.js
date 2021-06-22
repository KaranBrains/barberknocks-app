import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { allService } from "../redux/actions/service";
import { AddStylist } from "../redux/actions/stylist";
import { Button } from "react-native-elements";
import { signUp } from "../redux/actions/auth";
import SelectPicker from "react-native-form-select-picker";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function BecomeStylist({ navigation }) {
  let allServices = null;
  const isFocused = useIsFocused();
  const [options, setOptions] = useState({});
  const options2 = ["torronto"];
  const [selected, setSelected] = useState();
  const [selected2, setSelected2] = useState();
  const initialState = {
    fullName: "",
    img: "",
    phone: "",
    email: "",
    service: "",
    city: "",
  };
  useEffect(() => {
    dispatch(allService()).then(() => {
      setOptions(allServices);
    });
  }, [isFocused, navigation]);
  const [formData, setformData] = useState(initialState);
  const [fileOneValue, setFileOneValue] = useState("");
  const [fileOne, setFileOne] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(AddStylist(formData, navigation));
    setformData(initialState);
    setFileOne("");
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  allServices = useSelector((state) => state.service?.AllData?.services);
  console.log("---------------------------------");
  console.log("---------------------------------");
  console.log("---------------------------------");
  return (
    <ScrollView>
      {/* {console.log(formData)} */}
      {
        <ImageBackground
          source={require("../assets/bg_1.jpg")}
          style={{ ...styles.header }}
        >
          <View style={{ ...styles.Signupcard }}>
            <Text style={{ ...styles.titleText }}>Become a Stylist..</Text>
            <View style={{ ...styles.inputDiv }}>
              <Text style={{ ...styles.inputHeading }}>Full Name</Text>
              <TextInput
                placeholder="Full Name"
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
                Service
              </Text>
              <SelectPicker
                onValueChange={(value) => {
                  setformData({
                    ...formData,
                    service: value,
                  });
                }}
                selected={selected}
                placeholder="Select Service"
                style={styles.option}
              >
                {Object.values(options).map((val, index) => (
                  <SelectPicker.Item
                    label={val?.name}
                    value={val?._id}
                    key={index * 100}
                  />
                ))}
              </SelectPicker>
              <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
                City
              </Text>
              <SelectPicker
                onValueChange={(value) => {
                  setformData({
                    ...formData,
                    city: value,
                  });
                }}
                selected={selected2}
                placeholder="Select City"
                style={styles.option}
              >
                {Object.values(options2).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
                ))}
              </SelectPicker>
              <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
                Image
              </Text>
              <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
                Email
              </Text>
              <TextInput
                placeholder="Email"
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
                placeholder="Mobile Number"
                onChangeText={(text) =>
                  setformData({
                    ...formData,
                    phone: text,
                  })
                }
                style={{ ...styles.input, ...styles.phoneNumberinput }}
                textContentType="none"
              />
            </View>
            <Button
              onPress={handleSubmit}
              title="Submit"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
        </ImageBackground>
      }
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
    fontSize: 36,
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
    borderRadius: 5,
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
    paddingTop: 15,
  },
  option: {
    backgroundColor: "#f3effd",
    paddingTop: 12,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
    borderRadius: 5,
    fontFamily: "font-demi",
  },
  numberDiv: {
    display: "flex",
    flexDirection: "row",
  },
});
