import React from "react";
import { StyleSheet, View } from "react-native";
import { Content, Accordion, Text, Icon } from "native-base";
const dataArray = [
  {
    title: "General Settings",
    content:
      "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
  },
  {
    title: "Users",
    content:
      "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
  },
  {
    title: "Advanced Settings",
    content:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.  ",
  },
  {
    title: "Advanced Settings",
    content:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.  ",
  },
];
export default function Faq() {
  const handleHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "font-bold",
          backgroundColor: "#EEEDED",
          color: "#000",
        }}
      >
        <Text style={{ fontWeight: "600" }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  };
  const handleContent = (item, expanded) => {
    return (
      <Text
        style={{
          fontFamily: "font-medium",
          backgroundColor: "#FEFEFE",
          elevation: 3,
          padding: 10,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        {item.content}
      </Text>
    );
  };
  return (
    <View
      style={{
        marginTop: 50,
        paddingVertical: 40,
        backgroundColor: "#fff",
      }}
    >
      <Content padder>
        <Accordion
          dataArray={dataArray}
          icon="add"
          animation={true}
          expanded={[0]}
          expandedIcon="remove"
          renderHeader={handleHeader}
          renderContent={handleContent}
        />
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "font-bold",
    backgroundColor: "#EEEDED",
    color: "#000",
  },
  content: {
    fontFamily: "font-medium",
    backgroundColor: "#FEFEFE",
    elevation: 3,
  },
});
