import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import Stripe from "../screens/Stripe"

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stripe"
        component={Stripe}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Pay Online" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
