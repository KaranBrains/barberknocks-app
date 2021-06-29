
import React, { useEffect , useState} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./stackNavigator";
import About from "./aboutStack";
import Login from "./authStack";
import Signup from "./signup";
import Contact from "./contactStack";
import UserProfile from "./userProfile";
import MyAddress from "./address";
import MyBookings from "./myBookings";
import Logout from "./logout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingsDetails from "./bookingDetailsStack";
import Payment from "./paymentStack";
import SelectAddress from "./selectAddressStack";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const [auth,setAuth] = useState(null)
  useEffect(() => {
    AsyncStorage.getItem("token").then((res) => {
      setAuth(res);
    });
  });

  return (
    auth ? (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
        <Drawer.Screen name="MyAddress" component={MyAddress} />
        <Drawer.Screen name="MyBookings" component={MyBookings} />
        {/* <Drawer.Screen name="BecomeStylist" component={BecomeStylist} /> */}
        <Drawer.Screen name="Logout" component={Logout} />
        {/* <Drawer.Screen name="BookingDetails" component={BookingsDetails} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="SelectAddress" component={SelectAddress} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    ) : (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
  );
}

export default DrawerNavigator;