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
  const allStylists = useSelector((state) => state.stylist?.AllData?.stylists);
  return (
    <View style={styles.stylists}>
      <Text style={globalStyles.mainHeading}>Expert Stylists</Text>
      <View style={styles.stylistCards}>
        {allStylists?.map(
          (stylist, index) =>
            index < 3 && (
              <Card containerStyle={styles.stylistCard}>
                <Image
                  source={require("../../assets/stylist.jpeg")}
                  style={styles.stylistImage}
                />
                <Text style={styles.heading}>{stylist.fullName}</Text>
              </Card>
            )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stylists: {
    paddingVertical: 40,
  },
  stylistImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 400,
  },
  stylistCard: {
    borderRadius: 400,
    width: "26%",
    alignSelf: "center",
  },
  stylistCards: {
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
