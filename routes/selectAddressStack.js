import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import SelectAddress from "../screens/selectAddress"

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectAddress"
        component={SelectAddress}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Select Address" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
