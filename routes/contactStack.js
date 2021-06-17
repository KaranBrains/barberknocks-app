import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Contact Us" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
