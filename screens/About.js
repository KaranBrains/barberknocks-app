import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import { Button, Card } from "react-native-elements";
import { globalStyles } from "../styles/global";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function About({ navigation }) {
    return (
      <ScrollView>
        <ImageBackground
          source={require("../assets/images/about.jpeg")}
          style={{ ...styles.header }}
        >
          <View style={{ ...styles.overlay, ...styles.homeContainer }}>
            <View style></View>
            <Text style={{ ...globalStyles.titleText, ...styles.homeTitle }}>
            Inspired by Global experiences,
            Fueled by hard work and passion
            </Text>
          </View>
        </ImageBackground>
        <View>
            <Text style={styles.aboutParagraph}>
            iOFFICE, Teem, ManagerPlus and Hippo CMMS brands are one family, working together to serve thousands of organizations and their millions of employees around the world. We are creative, curious and collaborative with a passion for inspiring the heart and soul of today’s workplace. See what defines our culture and why we're truly stronger together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text style={styles.font_32}>
            Partial Client List
            </Text>
            <Text style={styles.aboutParagraph2}>
            Since our early days as a meeting space booking app startup, Teem has grown into a workplace experience platform encompassing room and desk reservations, wayfinding, visitor management, and insights. As part of the iOFFICE family of companies, we are united in our drive to eliminate hurdles to productivity and enable exceptional workplace experiences.
            </Text>
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
        height: ScreenHeight,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      homeContainer: {
        flex: 1,
        padding: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      aboutParagraph : {
          color:"black",
          paddingTop: 30,
          paddingBottom : 20,
          paddingLeft : 20,
          paddingRight : 20,
      },
      font_32:{
          fontSize : 32,
          fontWeight : "bold",
          paddingLeft : 20,
          paddingRight : 20,
      },
      aboutParagraph2 : {
        color:"black",
        paddingTop: 10,
        paddingBottom : 20,
        paddingLeft : 20,
        paddingRight : 20,
    },
  });
  