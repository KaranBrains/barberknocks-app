import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
  },
  paragraph: {
    marginVertical: 10,
    lineHeight: 20,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "font-regular",
  },
  heading: {
    fontFamily: "font-bold",
    fontSize: 22,
    textAlign: "center",
    color: "#333",
  },
  subParagraph: {
    marginVertical: 5,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "font-medium",
    color: "#333",
  },
  mainHeading: {
    fontFamily: "font-bold",
    fontSize: 32,
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
});
