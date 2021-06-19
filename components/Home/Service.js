import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { globalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { allService } from "../../redux/actions/service";

export default function Service({ navigation }) {
  const dispatch = useDispatch();
  const handlePress = () => {    
    navigation.navigate("serviceLocation");
  };;
  useEffect(() => {
    dispatch(allService());
  }, []);
  const allServices = useSelector((state) => state.service?.AllData?.services);
  console.log(allServices);
  return (
    <View style={styles.services}>
      <Text style={globalStyles.mainHeading}>Popular Services</Text>
      <View style={styles.serviceCards}>
        {allServices?.map((service) => (
          <Card containerStyle={styles.card}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require("../../assets/Barber.png")}
                style={styles.serviceImage}
              />
              <Text style={styles.heading}>{service.name}</Text>
            </TouchableOpacity>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    width: "26%",
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
});
