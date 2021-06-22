import React, {useState, useEffect} from "react";
import { Button, Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height - 70;

export default function SlotDetails({ navigation, route }) {
  useEffect(() => {
    allSlots.map((slot) => {
      if((slot._id).toString() == slotId){
        return setDisplaySlot(slot);
      }
    })
  }, [])
  const [displaySlot, setDisplaySlot] = useState()
  const slotId = route?.params?.id;
  const allSlots = useSelector((state) => state.slot?.serviceSlot?.slots);
  const handleSubmit = () => {
    navigation.navigate("SelectAddress")
  };
  return (
    <ScrollView>
      <View style={{ ...styles.header }}>
        <View style={{ ...styles.bookingsDetailsCard }}>
          <View style={{ ...styles.bookingsDetailsRow }}>
            <Text style={{ ...styles.bookingsDetailsAnswer }}>Date</Text>
            <Text
              style={{
                ...styles.bookingsDetailsAnswer,
              }}
            >
              {displaySlot?.date}
            </Text>
          </View>
          <View style={{ ...styles.bookingsDetailsRow }}>
            <Text style={{ ...styles.bookingsDetailsAnswer }}>Time</Text>
            <Text style={{ ...styles.bookingsDetailsAnswer }}>
              {displaySlot?.time}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.bookingsDetailsCard }}>
          <View style={{ ...styles.bookingsDetailsRow }}>
            <Text style={{ ...styles.bookingsDetailsAnswer }}>Stylist</Text>
            <Text
              style={{
                ...styles.bookingsDetailsAnswer,
                ...styles.statusButton,
                ...styles.primary,
              }}
            >
              {displaySlot?.stylistName}
            </Text>
          </View>
          <View style={{ ...styles.bookingsDetailsRow }}>
            <Text style={{ ...styles.bookingsDetailsAnswer }}>Price</Text>
            <Text style={{ ...styles.bookingsDetailsAnswer, ...styles.green }}>
              {displaySlot?.price} USD
            </Text>
          </View>
        </View>
        <Button
          onPress={handleSubmit}
          title="Continue"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
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
    backgroundColor: "#ffffff",
    paddingVertical: "45%",
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 30,
    color: "#420a83",
    textAlign: "center",
    padding: 30,
    paddingBottom: 10,
  },
  bookingsDetailsCard: {
    paddingTop: 15,
    paddingBottom: 15,
    margin: "auto",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.125)",
    borderStyle: "solid",
    width: "90%",
    marginBottom: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  bookingsDetailsRow: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  bookingsDetailsQuestion: {
    color: "#420a83",
    fontFamily: "font-demi",
  },
  bookingsDetailsAnswer: {
    color: "#420a83",
    fontFamily: "font-bold",
    fontSize: 17,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  success: {
    backgroundColor: "#28a745",
    color: "#ffffff",
    borderRadius: 3,
  },
  danger: {
    backgroundColor: "#dc3545",
    color: "#ffffff",
    borderRadius: 3,
  },
  green:{
    color: 'green'
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  button: {
    backgroundColor: "#730fe4",
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 16,
  },
});
