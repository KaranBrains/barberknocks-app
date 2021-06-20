import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useDispatch, useSelector } from "react-redux";
import { AllSlots, ServiceSlots } from "../redux/actions/slot";
import { AllStylist } from "../redux/actions/stylist";
import { allSlot } from "../redux/api";
import { useIsFocused } from "@react-navigation/native";

export default function Slots({ navigation, route }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [displaySlots, setDisplaySlots] = useState(allSlots);
  const [filteredSlots, setFilteredSlots] = useState(allSlots);
  const [displayStylists, setDisplayStylists] = useState();
  const [selected, setselected] = useState("");
  const [selectedSlot, setselectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const service = route?.params?.service;
  const city = route?.params?.city;

  useEffect(() => {
    if (service && city) {
      dispatch(ServiceSlots(service, city));
    }
    dispatch(AllStylist());
    if (allSlots) {
      let filterSlots = allSlots.filter((slot) => {
        if (new Date(slot.date).getDate() == new Date().getDate()) {
          return slot;
        }
      });
      setDisplaySlots(filterSlots);
    }
  }, [service, city, isFocused]);

  let allSlots = useSelector((state) => {
    return state.slot?.serviceSlot?.slots;
  });
  const allStylists = useSelector((state) => state.service?.AllData?.services);

  console.log("------------------------------------------");
  console.log("------------------------------------------");
  console.log(allSlots);

  const startDate = selectedDate ? selectedDate.toString() : "";

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={(date) => {
          setSelectedDate(date);
        }}
        selectedDayColor="#420a83"
        selectedDayTextColor="#FFFFFF"
        textStyle={{ fontFamily: "font-demi" }}
        initialDate={Date.now()}
      />
      <View>
        <Text style={styles.text}>Selected Date:{startDate}</Text>
      </View>
      <View>{/* {displaySlots.map(slot)} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    fontFamily: "font-medium",
  },
  text: {
    fontFamily: "font-demi",
    fontSize: 18,
  },
});
