import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import BookingDetails from "../screens/bookingsDetails"

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookingDetails"
        component={BookingDetails}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Booking Details" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
