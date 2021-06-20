import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBookingById } from "../redux/actions/bookings";
import { GetStylistById } from "../redux/actions/stylist";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function BookingsDetails({ navigation, route }) {
  const id = route?.params?.id;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  let booking = useSelector((state) => {
    return state.bookings?.BookingByID?.booking;
  });
  let stylist = useSelector((state) => {
    return state.stylist?.stylistById?.stylist;
  });

  useEffect(() => {
    if (id) {
      dispatch(GetBookingById(id)).then(() => {
        if (booking) {
          dispatch(GetStylistById(booking?.stylist));
        }
      });
    }
  }, [navigation, isFocused]);
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
});
