import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAddress from "../screens/myAddress";
import Header from "../components/Header";
import StackHeader from "../components/StackHeader";
import AddAddress from "../screens/addAddress"

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Address" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Add Address" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
