import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";

const Footer = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("serviceLocation");
  };
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "About Us",
            data: ["Get to know Us", "Privacy Policy"],
          },
          {
            title: "Contact Us",
            data: ["Help", "Terms of Use"],
          },
          {
            title: "Inquiries",
            data: ["General Enquiries"],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.iconContainer}>
        <FontAwesome
          name="linkedin-square"
          size={50}
          color="black"
          style={styles.icon}
        />
        <FontAwesome
          name="instagram"
          size={50}
          color="black"
          style={styles.icon}
        />
        <FontAwesome
          name="facebook-official"
          size={50}
          color="black"
          style={styles.icon}
        />
      </View>
      <ImageBackground
        source={require("../assets/footer.png")}
        style={{ ...styles.header }}
      >
        <Text style={styles.footerHead}>Get Started</Text>
        <Text style={styles.footertext}>Book your mobile hair and beauty</Text>
        <View style={styles.maarginTop}>
          <Button
            title="Book Now"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={handleSubmit}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  sectionHeader: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontFamily: "font-bold",
  },
  item: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "font-medium",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 20,
    marginBottom: 30,
  },
  icon: {
    paddingRight: 15,
  },
  header: {
    flex: 1,
    minHeight: 350,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footerHead: {
    fontFamily: "font-bold",
    color: "#fff",
    fontSize: 25,
  },
  footertext: {
    fontFamily: "font-demi",
    color: "#fff",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  maarginTop: {
    marginTop: 20,
  },
  button: {
    fontFamily: "font-demi",
    backgroundColor: "#05214D",
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 18,
  },
});
