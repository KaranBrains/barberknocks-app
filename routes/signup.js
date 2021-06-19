import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens//Signup";
import Header from "../components/Header";
import VerifyEmail from "../screens/verifyEmail";
import VerifyPhone from "../screens/verifyPhone";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Signup" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Verify Email Code" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="VerifyPhone"
        component={VerifyPhone}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Verify Phone Code" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
