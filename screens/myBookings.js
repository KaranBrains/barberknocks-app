import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { UserBookings } from "../redux/actions/bookings";
import { Button, Card } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

let ScreenHeight = Dimensions.get("window").height - 70;

export default function MyBookings({ navigation }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  let displayBooking;
  const id = 1;
  const [modifiedBookings, setModifiedBookings] = useState({});
  const [activeClass, setActiveClass] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false,
  });

  useEffect(() => {
    dispatch(UserBookings());
  }, [navigation, isFocused]);
  let myBookings = useSelector(
    (state) => state.bookings?.MyBookingData?.myBookings
  );
  if (myBookings) {
    displayBooking = myBookings;
  }

  function filterBySchedule() {
    setActiveClass({
      button1: false,
      button2: false,
      button3: true,
      button4: false,
    });
    let myBookingsSchedule = myBookings?.filter((val) => {
      return val.status === "scheduled";
    });
    setModifiedBookings(myBookingsSchedule);
    displayBooking = null;
  }

  function filterByCompleted() {
    setActiveClass({
      button1: false,
      button2: true,
      button3: false,
      button4: false,
    });
    let myBookingsCompleted = myBookings?.filter((val) => {
      return val.status === "completed";
    });
    setModifiedBookings(myBookingsCompleted);
    displayBooking = null;
  }

  function filterByCancelled() {
    setActiveClass({
      button1: false,
      button2: false,
      button3: false,
      button4: true,
    });
    let myBookingsCompleted = myBookings?.filter((val) => {
      return val.status === "cancelled";
    });
    setModifiedBookings(myBookingsCompleted);
    displayBooking = null;
  }

  function MyAllBookings() {
    setActiveClass({
      button1: true,
      button2: false,
      button3: false,
      button4: false,
    });
    setModifiedBookings(myBookings);
    displayBooking = null;
  }

  function redirect(id, stylistId) {
    navigation.navigate("BookingsDetails", { id: id, stylistId: stylistId });
  }

  return (
    <ScrollView>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.titleText }}>My Bookings</Text>
        <View style={{ ...styles.buttonsDiv }}>
          <Button
            onPress={MyAllBookings}
            title="All Bookings"
            buttonStyle={
              !activeClass.button1 ? styles.button : styles.activeButton
            }
            titleStyle={
              !activeClass.button1 ? styles.buttonText : styles.whiteText
            }
          />
          <Button
            onPress={filterByCompleted}
            title="Completed"
            buttonStyle={
              !activeClass.button2 ? styles.button : styles.activeButton
            }
            titleStyle={
              !activeClass.button2 ? styles.buttonText : styles.whiteText
            }
          />
        </View>
        <View style={{ ...styles.buttonsDiv }}>
          <Button
            onPress={filterBySchedule}
            title="Scheduled"
            buttonStyle={
              !activeClass.button3 ? styles.button : styles.activeButton
            }
            titleStyle={
              !activeClass.button3 ? styles.buttonText : styles.whiteText
            }
          />
          <Button
            onPress={filterByCancelled}
            title="Cancelled"
            buttonStyle={
              !activeClass.button4 ? styles.button : styles.activeButton
            }
            titleStyle={
              !activeClass.button4 ? styles.buttonText : styles.whiteText
            }
          />
        </View>
        {modifiedBookings && modifiedBookings.length > 0
          ? modifiedBookings.map((val) => {
              return (
                <TouchableOpacity
                  key={val?._id}
                  onPress={() => {
                    redirect(val?._id, val?.stylist);
                  }}
                  style={{ ...styles.bookingsDetailsCard }}
                >
                  <View style={{ ...styles.bookingsDetailsRow }}>
                    <Text style={{ ...styles.bookingsDetailsAnswer }}>
                      {val?.service}
                    </Text>
                  </View>
                  <View style={{ ...styles.bookingsDetailsRow }}>
                    <Text style={{ ...styles.bookingsDetailsQuestion }}>
                      Stylist
                    </Text>
                    {val?.status == "completed" ? (
                      <Text
                        style={{
                          ...styles.bookingsDetailsAnswer,
                          ...styles.statusButton,
                          ...styles.success,
                        }}
                      >
                        Completed
                      </Text>
                    ) : null}
                    {val?.status == "cancelled" ? (
                      <Text
                        style={{
                          ...styles.bookingsDetailsAnswer,
                          ...styles.statusButton,
                          ...styles.danger,
                        }}
                      >
                        Cancelled
                      </Text>
                    ) : null}
                    {val?.status == "scheduled" ? (
                      <Text
                        style={{
                          ...styles.bookingsDetailsAnswer,
                          ...styles.statusButton,
                          ...styles.primary,
                        }}
                      >
                        Scheduled
                      </Text>
                    ) : null}
                  </View>
                  <View style={{ ...styles.bookingsDetailsRow }}>
                    <Text style={{ ...styles.bookingsDetailsAnswer }}>
                      {val.stylistName}
                    </Text>
                    <Text style={{ ...styles.bookingsDetailsAnswer }}>
                      {val.date} {val.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          : displayBooking &&
            displayBooking.length > 0 &&
            !activeClass.button2 &&
            !activeClass.button3
          ? displayBooking.map((val) => {
              return (
                <TouchableOpacity
                  key={val?._id}
                  onPress={() => {
                    redirect(val?._id, val?.stylist);
                  }}
                  style={{ ...styles.bookingsDetailsCard }}
                >
                  <View style={{ ...styles.bookingsDetailsRow }}>
                    <Text style={{ ...styles.bookingsDetailsAnswer }}>
                      {val?.service}
                    </Text>
                  </View>
                  <View style={{ ...styles.bookingsDetailsRow }}>
                    <Text style={{ ...styles.bookingsDetailsQuestion }}>
                      Stylist
                    </Text>
                    {val?.status == "completed" ? (
                      <Text
                        style={{
                          ...styles.bookingsDetailsAnswer,
                          ...styles.statusButton,
                          ...styles.success,
                        }}
                      >
                        Completed
                      </Text>
                    ) : null}
                    {val?.status == "cancelled" ? (
                      <Text
                        style={{
                          ...styles.bookingsDetailsAnswer,
                          ...styles.statusButton,
                          ...styles.danger,
                        }}
                      >
                        Cancelled
                      </Text>
                    ) : null}
                    {val?.status == "scheduled" ? (
                      <Text
                        style={{
                          ...styles.bookingsDetailsAnswer,
                          ...styles.statusButton,
                          ...styles.primary,
                        }}
                      >
                        Scheduled
                      </Text>
                    ) : null}
                  </View>
                  <View style={{ ...styles.bookingsDetailsRow }}>
                    <Text style={{ ...styles.bookingsDetailsAnswer }}>
                      {val.stylistName}
                    </Text>
                    <Text style={{ ...styles.bookingsDetailsAnswer }}>
                      {val.date} {val.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          : null}
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
  primary: {
    backgroundColor: "#007bff",
    color: "#ffffff",
    borderRadius: 3,
  },
  statusButton: {
    padding: 5,
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    margin: 10,
  },
  button: {
    backgroundColor: "#ffffff",
    borderColor: "#420a83",
    borderWidth: 1,
    width: 120,
  },
  buttonText: {
    color: "#420a83",
  },
  whiteText: {
    color: "#ffffff",
  },
  activeButton: {
    backgroundColor: "#007bff",
    borderColor: "#420a83",
    borderWidth: 1,
    width: 120,
  },
});
