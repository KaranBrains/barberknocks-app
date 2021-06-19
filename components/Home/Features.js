import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { globalStyles } from "../../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Service() {
  return (
    <View style={styles.cardContainer}>
      <Card>
        <AntDesign
          name="clockcircle"
          size={60}
          color="#17907c"
          style={styles.icon}
        />
        <Text style={globalStyles.heading}>24 hr availability</Text>
        <Text style={globalStyles.subParagraph}>
          Around the clock booking availabiility
        </Text>
      </Card>
      <Card>
        <FontAwesome
          name="dollar"
          size={60}
          color="#17907c"
          style={styles.icon}
        />
        <Text style={globalStyles.heading}>Affordable prices</Text>
        <Text style={globalStyles.subParagraph}>
          Enjoy affordable mobile services from top stylists
        </Text>
      </Card>
      <Card>
        <FontAwesome name="map" size={60} color="#17907c" style={styles.icon} />
        <Text style={globalStyles.heading}>Anywhere, Anytime</Text>
        <Text style={globalStyles.subParagraph}>
          Choose you preffered location and time slot as per your flexibility
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 40,
  },
  icon: {
    textAlign: "center",
    marginBottom: 10,
  },
});
