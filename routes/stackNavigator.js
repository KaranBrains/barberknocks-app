import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Header from "../components/Header";
import StackHeader from "../components/StackHeader";
import ServiceLocation from "../screens/serviceLocation";
import Slots from "../screens/Slots";
import SlotDetails from "../screens/slotDetails";
import SelectAddress from "../screens/selectAddress";
import AddAddress from "../screens/addAddress";
import Payment from "../screens/Payment";
import BookingsDetails from "../screens/bookingsDetails";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="BarberKnocks" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="serviceLocation"
        component={ServiceLocation}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Service Location" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="Slots"
        component={Slots}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Slots" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="SlotDetails"
        component={SlotDetails}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Slot Details" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="SelectAddress"
        component={SelectAddress}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Select Address" />
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
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Payment" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="BookingDetails"
        component={BookingsDetails}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Bookings Details" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
