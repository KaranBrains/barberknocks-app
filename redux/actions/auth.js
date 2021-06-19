import * as api from "../api";
import {
  SIGN_IN,
  CLIENT_SIGN_UP,
  VERIFY_EMAIL,
  VERIFY_PHONE,
  EMAIL_OTP,
  PHONE_OTP,
  CHANGE_PASSWORD,
  VERIFY_FORGOT,
  ADD_ADDRESS,
  GET_USER_BY_EMAIL,
  GET_LOGGED_IN_USER,
} from "../constants";
import jwt from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Store Data

const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    alert("Error saving data");
  }
};

// Retrieve Data

const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    alert("Error retrieving data");
  }
};

// SIGNIN
export const signIn = (formData, navigation) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(jwt(data.token));
    dispatch({ type: SIGN_IN, data });
    await _storeData("token", data.token);
    const role = jwt(data.token).role;
    alert(`You are logged in as ${role}`);
    navigation.navigate("Home");
  } catch (e) {
    console.log(e?.response?.data);
    alert(e?.response?.data?.msg);
  }
};

// SIGNUP
export const signUp = (formData, navigation) => async (dispatch) => {
  try {
    try {
      await api.getPhoneOtp(formData.phone);
    } catch (e) {
      alert("Wrong Number");
      return;
    }
    const { data } = await api.signUp(formData);
    dispatch({ type: CLIENT_SIGN_UP, data });
    alert("You are signed up");
    await api.getEmailOtp(formData.email);
    await _storeData("isEmailVerified", "false");
    console.log(navigation);
    navigation.navigate("VerifyEmail");
  } catch (e) {
    console.log(e.response);
    alert(e?.response?.data?.msg);
  }
};

//Add Address
export const addAddress = (formData, navigation) => async (dispatch) => {
  try {
    const user = (await _retrieveData("userProfile"))
      ? JSON.parse(await _retrieveData("userProfile"))
      : jwt(await _retrieveData("token"));
    const { data } = await api.addAddress(formData, user.email);
    dispatch({ type: ADD_ADDRESS, data });
    alert("Address Added Successfully");
    navigation.navigate("MyAddress");
  } catch (e) {
    console.log(e.response);
    alert(e?.response?.data?.msg);
  }
};

// EMAIL OTP
export const emailOtp = () => async (dispatch) => {
  try {
    const formData = (await _retrieveData("userProfile"))
      ? JSON.parse(await _retrieveData("userProfile"))
      : jwt(await _retrieveData("token"));
    const { data } = await api.getEmailOtp(formData.email);
    alert("Code is send to your email successfully");
    dispatch({ type: EMAIL_OTP, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const verifyEmailOtp = (otp, navigation) => async (dispatch) => {
  try {
    const formData = (await _retrieveData("userProfile"))
      ? JSON.parse(await _retrieveData("userProfile"))
      : jwt(await _retrieveData("token"));
    console.log("abc");
    console.log(formData);
    const { data } = await api.verifyEmailOtp(otp, formData.email);
    dispatch({ type: VERIFY_EMAIL, data });
    alert("Email is Verified");
    await _storeData("isEmailVerified", "true");
    await _storeData("isNumberVerified", "false");
    navigation.navigate("VerifyPhone");
    await api.getPhoneOtp(formData.phone);
  } catch (e) {
    console.log("xyz");
    console.log(e);
    alert(e?.response?.data?.msg);
  }
};

export const changePassword = (password) => async (dispatch) => {
  try {
    const formData = JSON.parse(await _retrieveData("userProfile"));
    const token = await _retrieveData("token");
    const body = {
      email: formData.email,
      token: token,
      pass: password,
    };
    const { data } = await api.changePassword(body);
    dispatch({ type: CHANGE_PASSWORD, data });
    alert("Password changed");
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

// PHONE OTP
export const phoneOtp = () => async (dispatch) => {
  try {
    const formData = (await _retrieveData("userProfile"))
      ? JSON.parse(await _retrieveData("userProfile"))
      : jwt(await _retrieveData("token"));
    const { data } = await api.getPhoneOtp(formData.email);
    alert("Code is send to your email successfully");
    dispatch({ type: PHONE_OTP, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const verifyPhoneOtp = (otp, navigation) => async (dispatch) => {
  try {
    const formData = (await _retrieveData("userProfile"))
      ? JSON.parse(await _retrieveData("userProfile"))
      : jwt(await _retrieveData("token"));
    const { data } = await api.verifyPhoneOtp(
      otp,
      formData.email,
      `${formData.phone}`
    );
    dispatch({ type: VERIFY_PHONE, data });
    alert("Phone Number is Verified");
    await _storeData("isNumberVerified", "true");
    navigation.navigate("Login");
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const getUserByEmail = () => async (dispatch) => {
  try {
    const formData = (await _retrieveData("userProfile"))
      ? JSON.parse(await _retrieveData("userProfile"))
      : jwt(await _retrieveData("token"));
    const { data } = await api.getUserByEmail(formData.email);
    console.log("xyz", data, formData.email);
    dispatch({ type: GET_USER_BY_EMAIL, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const forgotEmailOtp = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getEmailOtp(formData.email);
    await _storeData("email", formData.email);
    alert("Code is send to your email successfully");
    dispatch({ type: EMAIL_OTP, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

// LOGGED IN USER
export const getLoggedInUser = () => async (dispatch) => {
  try {
    const formData = jwt(await _retrieveData("token"));
    console.log(formData);
    const { data } = await api.getUserById(formData.id);
    dispatch({ type: GET_LOGGED_IN_USER, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const verifyForgotEmailOtp = (otp) => async (dispatch) => {
  try {
    const formData = await _retrieveData("email");
    console.log(formData);
    const { data } = await api.verifyForgotEmailOtp(otp, formData);
    dispatch({ type: VERIFY_FORGOT, data });
    alert("OTP Verified");
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

// CHECKING AUTHENTICATION
export const isAuthenticated = async () => {
  try {
    const token = await _retrieveData("token");
    if (!token) {
      return false;
    } else {
      const decoded = jwt(token);
      if (decoded?.email) {
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {
    alert(e?.msg);
  }
};

export const isEmailVerified = async () => {
  try {
    const isEmailVerified = await _retrieveData("isEmailVerified");
    if (!isEmailVerified) {
      return "";
    } else {
      return isEmailVerified;
    }
  } catch (e) {
    alert(e?.msg);
  }
};

export const isNumberVerified = async () => {
  try {
    const isNumberVerified = await _retrieveData("isNumberVerified");
    if (!isNumberVerified) {
      return "";
    } else {
      return isNumberVerified;
    }
  } catch (e) {
    alert(e?.msg);
  }
};
