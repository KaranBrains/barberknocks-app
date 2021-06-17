import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { allService } from "../redux/actions/service";

let ScreenHeight = Dimensions.get("window").height - 40;
export default function ServiceLocation({ navigation }) {
  const initialState = { city: "Torronto", service: "" };
  const [formData, setformData] = useState(initialState);
  var [isPress, setIsPress] = React.useState(false);
  const [serviceId, setServiceId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allService());
  }, [serviceId]);

  const handlePress = () => {
    if (!formData.city || !formData.service) {
      alert("You need to select both the entries");
      return;
    } else {
      navigation.navigate("Slots", {
        city: formData.city,
        service: formData.service,
      });
    }
  };
  const handlePressService = (id) => {
    setIsPress(true);
    setformData({ ...formData, service: id });
  };
  const allServices = useSelector((state) => state.service?.AllData?.services);
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Logincard }}>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Location</Text>
            <TextInput
              style={styles.input}
              value={formData.city}
              textContentType="name"
              onChangeText={(text) =>
                setformData({
                  ...formData,
                  city: text,
                })
              }
            />
            <Text style={{ ...styles.inputHeading }}>Services</Text>
            <View style={styles.serviceCards}>
              {allServices?.map((service) => (
                <Card containerStyle={{ ...styles.card }}>
                  <TouchableOpacity
                    onPress={() => {
                      handlePressService(service._id);
                    }}
                    style={isPress ? styles.border : ""}
                  >
                    <Image
                      source={require("../assets/Barber.png")}
                      style={styles.serviceImage}
                    />
                    <Text style={styles.heading}>{service.name}</Text>
                  </TouchableOpacity>
                </Card>
              ))}
            </View>
          </View>
          <Button
            title="Continue"
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
  card: {
    backgroundColor: "#eee",
    width: "40%",
    alignSelf: "center",
    borderRadius: 100,
  },
  services: {
    backgroundColor: "#fff",
    paddingVertical: 50,
  },
  serviceImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  serviceCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "font-demi",
    fontSize: 16,
    textAlign: "center",
    color: "#333",
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
    marginTop: 20,
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
  passwordDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  inputDiv: {
    paddingBottom: 30,
  },
  touchbutton: {
    paddingTop: 15,
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "font-demi",
  },
  border: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 50,
    padding: 5,
  },
});
