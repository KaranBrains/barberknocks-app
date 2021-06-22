import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BecomeStylist from "../screens/becomeStylist";
import Header from "../components/Header";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BecomeStylist"
        component={BecomeStylist}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Become Stylist" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
