import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../redux/actions/auth";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function UserProfile({ navigation }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByEmail());
  }, [navigation, isFocused]);
  let user = useSelector((state) => state.main?.authData?.user);
  return (
    <ScrollView>
      <View style={{ ...styles.Signupcard }}>
        <Text style={{ ...styles.titleText }}>User Profile</Text>
        <View style={{ ...styles.inputDiv }}>
          <Text style={{ ...styles.inputHeading }}>Full Name</Text>
          <TextInput
            value={user?.fullName}
            editable={false}
            style={styles.input}
          />
          <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
            Email
          </Text>
          <TextInput
            value={user?.email}
            editable={false}
            style={styles.input}
          />
          <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
            Phone Number
          </Text>
          <TextInput
            value={user?.phone}
            editable={false}
            style={styles.input}
          />
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
  Signupcard: {
    padding: 20,
    margin: 20,
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
  inputHeading: {
    color: "#420a83",
    fontSize: 18,
    fontFamily: "font-demi",
  },
  input: {
    backgroundColor: "#f3effd",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
    color: "black",
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
  paddingTop: {
    paddingTop: 10,
  },
});
