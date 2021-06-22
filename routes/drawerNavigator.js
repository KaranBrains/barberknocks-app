import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./stackNavigator";
import About from "./aboutStack";
import Login from "./authStack";
import Signup from "./signup";
import Contact from "./contactStack";
import UserProfile from "./userProfile";
import MyAddress from "./address";
// import BecomeStylist from "./becomeStylist";
import MyBookings from "./myBookings";
import Logout from "./logout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  useEffect(() => {
    AsyncStorage.getItem("token").then((res) => {
      console.log(res);
    });
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
        <Drawer.Screen name="MyAddress" component={MyAddress} />
        <Drawer.Screen name="MyBookings" component={MyBookings} />
        {/* <Drawer.Screen name="BecomeStylist" component={BecomeStylist} /> */}
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
