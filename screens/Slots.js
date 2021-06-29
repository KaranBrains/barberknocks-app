import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AllSlots, ServiceSlots } from "../redux/actions/slot";
import { AllStylist } from "../redux/actions/stylist";
import { allSlot } from "../redux/api";
import { ScrollView } from "react-native-gesture-handler";

export default function Slots({ navigation, route }) {
  const [date, setDate] = useState("");
  const [displaySlots, setDisplaySlots] = useState([]);
  const [displayStylists, setDisplayStylists] = useState(null);
  const [slotId, setSlotId] = useState("");
  const dispatch = useDispatch();

  const service = route?.params?.service;
  const city = route?.params?.city;
  const allSlots = useSelector((state) => state.slot?.serviceSlot?.slots);
  useEffect(() => {
    if ((service, city)) {
      dispatch(ServiceSlots(service, city));
    }
    dispatch(AllStylist());
  }, [service, city]);

  const getDay = (day) => {
    switch (day) {
      case "1":
        return "Mon";
      case "2":
        return "Tue";
      case "3":
        return "Wed";
      case "4":
        return "Thur";
      case "5":
        return "Fri";
      case "6":
        return "Sat";
      default:
        return "Sun";
    }
  };
  const today = new Date();

  const handlePress = (date) => {
    setDisplaySlots([]);
    setDisplayStylists();
    allSlots.map((slot) => {
      if (new Date(slot.date).getDate() === date) {
        setDisplaySlots((prevState) => [...prevState, slot]);
      }
    });
  };
  const handleSlot = (slot) => {
    setDisplayStylists(slot);
    setSlotId(slot._id);
  };
  const handleStylist = (id) => {
    navigation.navigate("SlotDetails", { id });
    console.log(id);
  };
  const weekDates = [];
  for (let i = 0; i < 14; i++) {
    weekDates.push({
      day: new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
        .getDay()
        .toString(),
      date: new Date(today.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
    });
  }
  return (
    <ScrollView>
      <View>
        <Text style={styles.headDate}>{date}</Text>
        <ScrollView horizontal={true}>
          <View style={styles.calendar}>
            {weekDates.map(({ date, day }) => (
              <View style={styles.dayDateContainer}>
                <Text style={styles.day}>{getDay(day)}</Text>
                <TouchableOpacity
                  onPress={() => {
                    handlePress(date);
                    setDate(date);
                  }}
                >
                  <View style={date && styles.dateFocus}>
                    <Text style={styles.date} value={date}>
                      {date}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.slotContainer}>
          {displaySlots.length !== 0 ? (
            displaySlots?.map((slot) => (
              <View>
                <TouchableOpacity
                  onPress={() => handleSlot(slot)}
                  style={slotId === slot._id && styles.slotFocus}
                >
                  <Text style={styles.slot}>{slot.time}</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noSlots}>No Slots Available</Text>
          )}
        </View>
        <View style={styles.displayStylist}>
          {displayStylists && (
            <View>
              <Text style={styles.noSlots}>Available Stylists</Text>
              <TouchableOpacity
                onPress={() => handleStylist(displayStylists._id)}
                style={styles.stylistCard}
              >
                <Image
                  source={require("../assets/stylist.jpeg")}
                  style={styles.stylistImage}
                />
                <Text style={styles.stylistName}>
                  {displayStylists.stylistName}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  calendar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#730fe4",
  },
  date: {
    minHeight: 45,
    minWidth: 45,
    marginHorizontal: 8,
    color: "#fff",
    fontFamily: "font-demi",
    fontSize: 14,
    textAlign: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    textAlignVertical: "center",
  },
  day: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "#fff",
    fontFamily: "font-demi",
    fontSize: 14,
    textAlign: "center",
  },
  dayDateContainer: {
    color: "#fff",
    paddingBottom: 35,
    paddingTop: 20,
  },
  slotContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    justifyContent: "center",
    marginTop: 30,
  },
  slot: {
    color: "#fff",
    backgroundColor: "#730fe4",
    marginVertical: 10,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  noSlots: {
    color: "#730fe4",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
    fontFamily: "font-bold",
  },
  stylistImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 400,
  },
  stylistName: {
    color: "#730fe4",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "font-demi",
    marginTop: 10,
  },
  stylistCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#730fe4",
    alignSelf: "center",
    width: "60%",
  },
  headDate: {
    paddingTop: 20,
    backgroundColor: "#730fe4",
    color: "#fff",
    fontSize: 25,
    fontFamily: "font-bold",
    textAlign: "center",
  },
  displayStylist: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    justifyContent: "center",
    marginTop: 30,
  },
  slotFocus: {
    color: "purple",
    backgroundColor: "#ddd",
    borderColor: "#333",
  },
  dateFocus: {

  },
});
