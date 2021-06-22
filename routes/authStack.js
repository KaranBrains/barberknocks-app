import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Header from "../components/Header";
import StackHeader from "../components/StackHeader";
import ForgotEmail from "../screens/ForgotPassword/Email";
import ForgotOtp from "../screens/ForgotPassword/Otp";


const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Login" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotEmail}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Forgot Password" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="ForgotOtp"
        component={ForgotOtp}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <StackHeader navigation={navigation} title="Verification Code" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
