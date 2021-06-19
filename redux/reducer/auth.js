import {
  SIGN_IN,
  CLIENT_SIGN_UP,
  DRIVER_SIGN_UP,
  LOGOUT,
  VERIFY_EMAIL,
  VERIFY_PHONE,
  VERIFY_ID,
  ADD_VEHICLE,
  EMAIL_OTP,
  PHONE_OTP,
  VERIFY_FORGOT,
  CHANGE_PASSWORD,
  ADD_ADDRESS,
  GET_USER_BY_EMAIL,
  GET_LOGGED_IN_USER,
} from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (state = { authData: null }, action) => {
  const _storeData = (key, value) => {
    try {
      AsyncStorage.setItem(key, value);
    } catch (error) {
      alert("Error saving data");
    }
  };
  switch (action.type) {
    case SIGN_IN:
      console.log(action?.data);
      action.data.token && _storeData("token", action?.data.token);
      return { ...state, authData: action?.data };
    case CLIENT_SIGN_UP:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case DRIVER_SIGN_UP:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case VERIFY_EMAIL:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case VERIFY_PHONE:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case ADD_ADDRESS:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case VERIFY_ID:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case ADD_VEHICLE:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case EMAIL_OTP:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case LOGOUT:
      AsyncStorage.clear();
      window.location.href = "/";
      return { ...state, authData: null };
    case PHONE_OTP:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case VERIFY_FORGOT:
      console.log(action?.data);
      action.data.token && _storeData("forgotToken", action?.data.token);
      return { ...state, authData: action?.data };
    case CHANGE_PASSWORD:
      AsyncStorage.clear();
      return { ...state, authData: null };
    case GET_USER_BY_EMAIL:
      return { ...state, authData: action?.data };
    case GET_LOGGED_IN_USER:
      console.log(action?.data);
      action.data.token && _storeData("forgotToken", action?.data.token);
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
