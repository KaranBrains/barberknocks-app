
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function BookingsDetails({ navigation }) {
    return (
       <ScrollView>
          <View style={{ ...styles.header}}>
          <Text style={{ ...styles.titleText }}>
             Bookings Details
          </Text>
          <View style={{ ...styles.bookingsDetailsCard  }}>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Slot Date</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer}}>2021-06-12</Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Slot Time</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer}}>04:25</Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow, }}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Service</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer}}>Barber</Text>
            </View>
            <Text style={{ ...styles.borderBottom}}></Text>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Status</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer, ...styles.success}}>Completed</Text>
            </View>
            <Text style={{ ...styles.borderBottom}}></Text>
            <View style={{ ...styles.bookingsDetailsRowAddress}}>
              <Text style={{ ...styles.bookingsDetailsQuestion, ...styles.paddingBottom}}>Address</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer, ...styles.primary}}>Awas Vikas Colony, A 53,Uttar Pradesh,Pilibhit,262001</Text>
            </View>
            <Text style={{ ...styles.borderBottom}}></Text>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Stylist</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer}}>Karan Brains</Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Contact Number</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer}}>9335639735</Text>
            </View>
            <Text style={{ ...styles.borderBottom}}></Text>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Payment Mode</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer, ...styles.success}}>Cash</Text>
            </View>
            <View style={{ ...styles.bookingsDetailsRow}}>
              <Text style={{ ...styles.bookingsDetailsQuestion}}>Total</Text>
              <Text style={{ ...styles.bookingsDetailsAnswer,  ...styles.success}}>500</Text>
            </View>
          </View>
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
        padding: 30
      },
      bookingsDetailsCard:{
        paddingTop:15,
        paddingBottom: 15,
        margin: "auto",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,.125)",
        borderStyle: "solid",
        width: "90%",
      },
      bookingsDetailsRow:{
        paddingLeft:15,
        paddingRight: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10
      },
      bookingsDetailsQuestion:{
        color:"#6c757d",
        fontFamily:"font-demi",
      },
      bookingsDetailsAnswer:{
        color:"#420a83",
        fontFamily:"font-bold"
      },
      borderBottom:{
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,.125)",
        borderStyle: "solid",
        width:"100%",
        marginBottom:10,
        marginTop:0,
        paddingTop:0
      },
      bookingsDetailsRowAddress:{
        paddingLeft:15,
        paddingRight: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom:10
      },
      paddingBottom:{
        paddingBottom: 10
      },
      success:{
        color:"#28a745"
      },
      danger:{
        color:"#dc3545"
      },
      primary:{
        color:"#007bff"
      }
  });