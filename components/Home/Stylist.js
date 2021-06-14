import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { globalStyles } from "../../styles/global";

export default function Service() {
  return (
    <View style={styles.stylists}>
      <Text style={globalStyles.mainHeading}>Expert Stylists</Text>
      <View>
        <Card>
          <Image
            source={require("../../assets/stylist.jpeg")}
            style={styles.stylistImage}
          />
          <Text style={globalStyles.heading}>Karan Bains</Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stylists: {
    paddingVertical: 40,
  },
  stylistImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});
