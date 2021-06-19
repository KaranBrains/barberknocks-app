import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { globalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { AllStylist } from "../../redux/actions/stylist";

export default function Service() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllStylist());
  }, []);
  const allStylists = useSelector((state) => state.service?.AllData?.services);
  return (
    <View style={styles.stylists}>
      <Text style={globalStyles.mainHeading}>Expert Stylists</Text>
      <View style={styles.stylistCards}>
        {allStylists?.map((stylist) => (
          <Card containerStyle={styles.stylistCard}>
            <Image
              source={require("../../assets/stylist.jpeg")}
              style={styles.stylistImage}
            />
            <Text style={globalStyles.heading}>{stylist.name}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stylists: {
    paddingVertical: 40,
  },
  stylistImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 400,
  },
  stylistCard: {
    borderRadius: 400,
    width: "40%",
    alignSelf: "center",
  },
  stylistCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
