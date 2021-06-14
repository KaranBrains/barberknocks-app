import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { globalStyles } from "../../styles/global";

export default function Service() {
  return (
    <View style={styles.services}>
      <Text style={globalStyles.mainHeading}>Popular Services</Text>
      <View style={styles.serviceCards}>
        <Card containerStyle={styles.card}>
          <Image
            source={require("../../assets/Barber.png")}
            style={styles.serviceImage}
          />
        </Card>
        <Card containerStyle={styles.card}>
          <Image
            source={require("../../assets/Barber.png")}
            style={styles.serviceImage}
          />
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
  },
  services: {
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  serviceImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  serviceCards: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
