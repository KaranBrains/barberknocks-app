import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AllSlots, ServiceSlots } from "../redux/actions/slot";
import { AllStylist } from "../redux/actions/stylist";
import { allSlot } from "../redux/api";
import { useIsFocused } from "@react-navigation/native";
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function Slots({ navigation, route }) {

  const [displaySlots, setDisplaySlots] = useState(allSlots);
  const [filteredSlots, setFilteredSlots] = useState(allSlots);
  const [displayStylists, setDisplayStylists] = useState();
  const dispatch = useDispatch()

  const service = route?.params?.service;
  const city = route?.params?.city;
  const allSlots = useSelector((state) => state.slot?.serviceSlot?.slots);

  useEffect(() => {
    if (service,city) {
      dispatch(ServiceSlots(service,city));
    }
    dispatch(AllStylist());

  }, [service, city]);

  const today = new Date();
  const handleSlot = (date) => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    if (allSlots) {
      let filterSlots = allSlots.filter((slot) => {
        if (new Date(slot.date).getDate() == (new Date(date)).getDate()) {
          return slot;
        }
      });
      setDisplaySlots(filterSlots);
    }
    console.log(displaySlots)
  }
  return (
    <View style={styles.container}>
    <CalendarStrip
      scrollable
      style={{height:200, paddingTop: 20, paddingBottom: 10}}
      calendarColor={'#730fe4'}
      calendarHeaderStyle={{color: 'white'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1}}
      customDatesStyles ={{
        startingDate: {today}
      }}
      onDateSelected={(date) => handleSlot(date)}
      highlightDateNameStyle={{color: '#fff'}}
      highlightDateNumberStyle={{color: '#730fe4', backgroundColor: '#fff', borderRadius: 50, paddingHorizontal: 2}}
    />
  </View>
  );
  }
const styles = StyleSheet.create({
  container: { flex: 1 }
})
