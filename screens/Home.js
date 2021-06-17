import React, { useState, useEffect } from "react";
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
import Carousel from "react-native-snap-carousel";
import Service from "../components/Home/Service";
import Stylist from "../components/Home/Stylist";
import Feature from "../components/Home/Features";
import Faq from "../components/Home/Faq";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { allService } from "../redux/actions/service";

let ScreenHeight = Dimensions.get("window").height - 70;
const renderItem = () => (
  <View>
    <Card containerStyle={{ width: "100%" }}>
      <Text style={globalStyles.subParagraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </Text>
    </Card>
  </View>
);
const video = [
  {
    id: "WpIAc9by5iU",
    thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
    title: "Led Zeppelin - Stairway To Heaven",
  },
  {
    id: "sNPnbI1arSE",
    thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
    title: "Eminem - My Name Is",
  },
  {
    id: "VOgFZfRVaww",
    thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
    title: "",
  },
];
function Home({ navigation }) {  
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/about_bg.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.overlay, ...styles.homeContainer }}>
          <View style></View>
          <Text style={{ ...globalStyles.titleText, ...styles.homeTitle }}>
            Beauty demands at doorstep
          </Text>
          <Text style={globalStyles.paragraph}>
            Book your mobile hair and beauty service from top-stylists around
            the city today -
          </Text>
          <Button
            title="Book Now"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>
      </ImageBackground>
      <Feature />
      <Service />
      <Stylist />
      <Carousel
        data={video}
        sliderWidth={360}
        itemWidth={256}
        firstItem={0}
        renderItem={renderItem}
        layout={"default"}
      />
      <Faq />
      <Footer />
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
  homeTitle: {
    lineHeight: 50,
  },
  button: {
    fontFamily: "font-demi",
    backgroundColor: "#05214D",
    marginTop: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 18,
  },
});

export default Home;
