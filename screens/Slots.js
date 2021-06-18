import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function Slots({ navigation, route }) {
  const [selectedDate, setSelectedDate] = useState("");
  const startDate = selectedDate ? selectedDate.toString() : "";
  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={(date) => {
          setSelectedDate(date);
          console.log(route.params);
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
