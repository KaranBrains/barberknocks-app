import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import Payment from "../screens/Payment"

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Payment" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
