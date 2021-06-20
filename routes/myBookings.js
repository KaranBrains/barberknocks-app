import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyBookings from "../screens/myBookings";
import Header from "../components/Header";
import BookingsDetails from "../screens/bookingsDetails";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyBookings"
        component={MyBookings}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="My Bookings" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="BookingsDetails"
        component={BookingsDetails}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Bookings Details" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
