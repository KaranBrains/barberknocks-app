import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetBookingById,
  GiveFeedback,
  cancelBookingById,
} from "../redux/actions/bookings";
import { GetStylistById } from "../redux/actions/stylist";
import { useIsFocused } from "@react-navigation/native";
import { Button, Card } from "react-native-elements";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function BookingsDetails({ navigation, route }) {
  const initialState = { rating: 0, feedback: "" };
  const [formData, setformData] = useState(initialState);
  const id = route?.params?.id;
  const stylistId = route?.params?.stylistId;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  let booking = useSelector((state) => {
    return state.bookings?.BookingByID?.booking;
  });
  useEffect(() => {
    dispatch(GetBookingById(id));
    dispatch(GetStylistById(stylistId));
  }, [navigation, isFocused, id, stylistId]);
  let stylist = useSelector((state) => {
    return state.stylist?.stylistById?.stylist;
  });
  const provideFeedback = () => {
    dispatch(GiveFeedback(formData, id)).then(() => {
      alert("Feedback Submitted");
      navigation.navigate("MyBookings");
    });
  };
  const cancelBooking = () => {
    dispatch(cancelBookingById(id)).then(() => {
      alert("Booking Cancelled");
      navigation.navigate("MyBookings");
    });
  };
  return (
    <ScrollView>
      {booking && stylist ? (
        <View style={{ ...styles.header }}>
          <Text style={{ ...styles.titleText }}>Bookings Details</Text>
          <View style={{ ...styles.bookingsDetailsCard }}>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>
                Slot Date
              </Text>
              <Text style={{ ...styles.bookingsDetailsAnswer }}>
                {booking?.date}
              </Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>
                Slot Time
              </Text>
              <Text style={{ ...styles.bookingsDetailsAnswer }}>
                {booking?.time}
              </Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>Service</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer }}>
                {booking?.service}
              </Text>
            </View>
            <Text style={{ ...styles.borderBottom }}></Text>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>Status</Text>
              {booking?.status == "completed" ? (
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
              {booking?.status == "cancelled" ? (
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
              {booking?.status == "scheduled" ? (
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
            <Text style={{ ...styles.borderBottom }}></Text>
            <View style={{ ...styles.bookingsDetailsRowAddress }}>
              <Text
                style={{
                  ...styles.bookingsDetailsQuestion,
                  ...styles.paddingBottom,
                }}
              >
                Address
              </Text>
              <Text
                style={{ ...styles.bookingsDetailsAnswer, ...styles.primary }}
              >
                {booking.address}
              </Text>
            </View>
            <Text style={{ ...styles.borderBottom }}></Text>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>Stylist</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer }}>
                {stylist?.fullName}
              </Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>
                Contact Number
              </Text>
              <Text style={{ ...styles.bookingsDetailsAnswer }}>
                {stylist?.phone}
              </Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>Email</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer }}>
                {stylist?.email}
              </Text>
            </View>
            <Text style={{ ...styles.borderBottom }}></Text>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>
                Payment Mode
              </Text>
              <Text
                style={{ ...styles.bookingsDetailsAnswer, ...styles.success }}
              >
                {booking?.modeOfPayment == "cash" ? "Cash" : "Online"}
              </Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow }}>
              <Text style={{ ...styles.bookingsDetailsQuestion }}>Total</Text>
              <Text
                style={{ ...styles.bookingsDetailsAnswer, ...styles.success }}
              >
                {booking?.price}
              </Text>
            </View>
          </View>
          {booking.status == "completed" && !booking.rating ? (
            <View style={styles.feedbackForm}>
              <View style={styles.textCenter}>
                <Text style={styles.feedBackText}>Give Feedback</Text>
              </View>
              <Text style={{ ...styles.inputHeading }}>Ratings</Text>
              <TextInput
                onChangeText={(text) =>
                  setformData({
                    ...formData,
                    rating: text,
                  })
                }
                placeholder="Out of 5"
                style={styles.input}
                keyboardType="numeric"
              />
              <Text style={{ ...styles.inputHeading }}>Feedback</Text>
              <TextInput
                onChangeText={(text) =>
                  setformData({
                    ...formData,
                    feedback: text,
                  })
                }
                style={styles.input}
              />
              <View style={styles.feedBackBookingDiv}>
                <Button
                  onPress={provideFeedback}
                  title="Submit"
                  buttonStyle={styles.feedbackButton}
                  titleStyle={styles.buttonText}
                />
              </View>
            </View>
          ) : null}
          {booking?.status == "scheduled" && !booking?.rating ? (
            <View style={styles.cancelBookingDiv}>
              <Button
                onPress={cancelBooking}
                title="Cancel Booking"
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
              />
            </View>
          ) : null}
        </View>
      ) : (
        <Text style={{ ...styles.header }}>Loading...</Text>
      )}
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
  inputHeading: {
    color: "#420a83",
    fontSize: 18,
    fontFamily: "font-demi",
    paddingTop: 10,
  },
  input: {
    backgroundColor: "#f3effd",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 30,
    color: "#420a83",
    textAlign: "center",
    padding: 30,
  },
  bookingsDetailsCard: {
    paddingTop: 15,
    paddingBottom: 15,
    margin: "auto",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.125)",
    borderStyle: "solid",
    width: "90%",
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
    color: "#6c757d",
    fontFamily: "font-demi",
  },
  bookingsDetailsAnswer: {
    color: "#420a83",
    fontFamily: "font-bold",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.125)",
    borderStyle: "solid",
    width: "100%",
    marginBottom: 10,
    marginTop: 0,
    paddingTop: 0,
  },
  bookingsDetailsRowAddress: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  success: {
    color: "#28a745",
  },
  danger: {
    color: "#dc3545",
  },
  primary: {
    color: "#007bff",
  },
  button: {
    backgroundColor: "#dc3545",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  feedbackButton: {
    backgroundColor: "#730fe4",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    color: "#ffffff",
  },
  cancelBookingDiv: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  feedbackForm: {
    padding: 20,
    marginBottom: 30,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.125)",
    borderStyle: "solid",
    width: "90%",
  },
  feedBackBookingDiv: {
    paddingTop: 20,
  },
  textCenter: {
    alignItems: "center",
    paddingBottom: 10,
  },
  feedBackText: {
    fontSize: 22,
    color: "black",
    fontFamily: "font-bold",
  },
});
