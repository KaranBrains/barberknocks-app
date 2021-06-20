import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useDispatch, useSelector } from "react-redux";
import { AllSlots, serviceSlots } from "../redux/actions/slot";
import { AllStylist } from "../redux/actions/stylist";
import { allSlot } from "../redux/api";
import { useIsFocused } from "@react-navigation/native";

export default function Slots({ navigation, route }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const today = new Date();

  const startDate = selectedDate ? selectedDate.toString() : "";
  const service = route?.params?.service;
  const city = route?.params?.city;

  let allSlots = useSelector((state) => {
    return state.slot?.serviceSlot?.slots;
  });
  const [displaySlots, setDisplaySlots] = useState(allSlots);
  const [filteredSlots, setFilteredSlots] = useState(allSlots);
  const [displayStylists, setDisplayStylists] = useState();
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    dispatch(AllSlots());
    if ((service, city)) {
      dispatch(serviceSlots(service, city));
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
  const allStylists = useSelector((state) => state.service?.AllData?.services);
  console.log(allSlots);
  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={(date) => {
          setSelectedDate(date);
          console.log("abc");
          navigation.navigate("SlotDetails");
        }}
        selectedDayColor="#420a83"
        selectedDayTextColor="#FFFFFF"
        textStyle={{ fontFamily: "font-demi" }}
        initialDate={Date.now()}
      />
      <View>
        <Text style={styles.text}>SELECTED DATE:{startDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    fontFamily: "font-medium",
  },
  text: {
    fontFamily: "font-medium",
  },
});
