import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useDispatch, useSelector } from "react-redux";
import { AllSlots, serviceSlots } from "../redux/actions/slot";
import { AllStylist } from "../redux/actions/stylist";
import { allSlot } from "../redux/api";

export default function Slots({ navigation, route }) {
  const dispatch = useDispatch();

  const [displaySlots, setDisplaySlots] = useState(allSlots);
  const [filteredSlots, setFilteredSlots] = useState(allSlots);
  const [displayStylists, setDisplayStylists] = useState();
  const [selected, setselected] = useState("");
  const [selectedSlot, setselectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const service = route?.query?.service;
  const city = route?.query?.city;

  useEffect(() => {
    dispatch(AllSlots)
    if (service,city) {
      dispatch(serviceSlots(service,city));
    }
    dispatch(AllStylist());
    if (allSlots) {
      let filterSlots = allSlots.filter((slot) => {
        if (new Date(slot.date).getDate() == (new Date()).getDate()) {
          return slot;
        }
      });
      setDisplaySlots(filterSlots);
    }
  }, [service, city]);

  let allSlots = useSelector((state) => {console.log(state);return state.slot?.serviceSlot?.slots});
  const allStylists = useSelector((state) => state.service?.AllData?.services);

  console.log("------------------------------------------")
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
      <View>
        {/* {displaySlots.map(slot)} */}
      </View>
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
