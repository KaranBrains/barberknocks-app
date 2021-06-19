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
      console.log("Data saved");
      console.log(value);
    }
  } catch (error) {
    alert("Error retrieving data");
  }
};

// SIGNIN
export const signIn = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log((jwt(data.token)));
    dispatch({ type: SIGN_IN, data });
    const role = jwt(data.token).role;
    alert(`You are logged in as ${role}`)
  } catch (e) {
    console.log(e?.response?.data)
  }
};


// SIGNUP
export const signUp = (formData) => async (dispatch) => {
  try {
    try {
      await api.getPhoneOtp(formData.phone);
    } catch (e) {
      alert("Wrong Number")
      return;
    }
    const { data } = await api.signUp(formData);
    dispatch({ type: CLIENT_SIGN_UP, data });
    alert("You are signed up")
    await api.getEmailOtp(formData.email);
    _storeData("isEmailVerified", "false");
  } catch (e) {
    console.log(e.response);
    alert(e?.response?.data?.msg)
  }
};

//Add Address
export const addAddress = (formData, id) => async (dispatch) => {
  try {
    const user = JSON.parse(_retrieveData("userProfile"))
    ? JSON.parse(_retrieveData("userProfile"))
    : jwt(_retrieveData("token"));
    const { data } = await api.addAddress(formData,user.email);
    dispatch({ type: ADD_ADDRESS, data });
    alert("Address Added Successfully")
  } catch (e) {
    console.log(e.response);
    alert(e?.response?.data?.msg)
  }
};


// EMAIL OTP
export const emailOtp = () => async (dispatch) => {
  try {
    const formData = JSON.parse(_retrieveData("userProfile"))
      ? JSON.parse(_retrieveData("userProfile"))
      : jwt(_retrieveData("token"));
    const { data } = await api.getEmailOtp(formData.email);
    alert("Code is send to your email successfully")
    dispatch({ type: EMAIL_OTP, data });
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

export const verifyEmailOtp = (otp,) => async (dispatch) => {
  try {
    const formData = JSON.parse(_retrieveData("userProfile"))
      ? JSON.parse(_retrieveData("userProfile"))
      : jwt(_retrieveData("token"));
    const { data } = await api.verifyEmailOtp(otp, formData.email);
    dispatch({ type: VERIFY_EMAIL, data });
    alert( "Email is Verified")
    _storeData("isEmailVerified", "true");
    _storeData("isNumberVerified", "false");
    await api.getPhoneOtp(formData.phone);
  } catch (e) {
    console.log(e.response);
    alert(e?.response?.data?.msg)
  }
};

export const changePassword = (password) => async (dispatch) => {
  try {
    const formData = JSON.parse(_retrieveData("userProfile"));
    const token = _retrieveData("token");    
    const body = {
      email: formData.email,
      token: token,
      pass: password,
    };
    const { data } = await api.changePassword(body);
    dispatch({ type: CHANGE_PASSWORD, data });
    alert("Password changed")
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

// PHONE OTP
export const phoneOtp = () => async (dispatch) => {
  try {
    const formData = JSON.parse(_retrieveData("userProfile"))
      ? JSON.parse(_retrieveData("userProfile"))
      : jwt(_retrieveData("token"));
    const { data } = await api.getPhoneOtp(formData.email);
    alert("Code is send to your email successfully")
    dispatch({ type: PHONE_OTP, data });
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

export const verifyPhoneOtp = (otp) => async (dispatch) => {
  try {
    const formData = JSON.parse(_retrieveData("userProfile"))
      ? JSON.parse(_retrieveData("userProfile"))
      : jwt(_retrieveData("token"));
    const { data } = await api.verifyPhoneOtp(
      otp,
      formData.email,
      `${formData.phone}`
    );
    dispatch({ type: VERIFY_PHONE, data });
    alert("Phone Number is Verified")
    _storeData("isNumberVerified", "true");
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

export const getUserByEmail = () => async (dispatch) => {
  try {
    const formData = JSON.parse(_retrieveData("userProfile"))
      ? JSON.parse(_retrieveData("userProfile"))
      : jwt(_retrieveData("token"));
    const { data } = await api.getUserByEmail(
      formData.email
    );
    dispatch({ type: GET_USER_BY_EMAIL, data });
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};


export const forgotEmailOtp = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getEmailOtp(formData.email);
    _storeData("email", formData.email);
    alert( "Code is send to your email successfully")
    dispatch({ type: EMAIL_OTP, data });
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

// LOGGED IN USER
export const getLoggedInUser= () => async (dispatch) => {
  try {
    const formData = jwt(_retrieveData("token"));
    console.log(formData)
      const { data } = await api.getUserById(formData.id);
      dispatch({ type: GET_LOGGED_IN_USER, data });
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

export const verifyForgotEmailOtp = (otp) => async (dispatch) => {
  try {
    const formData = _retrieveData("email");
    console.log(formData);
    const { data } = await api.verifyForgotEmailOtp(otp, formData);    
    dispatch({ type: VERIFY_FORGOT, data });    
    alert("OTP Verified")
  } catch (e) {
    alert(e?.response?.data?.msg)
  }
};

// CHECKING AUTHENTICATION
export const isAuthenticated = () => {
  try {
    const token = _retrieveData("token");
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
    alert(e?.msg)
  }
};

export const isEmailVerified = () => {
  try {
    const isEmailVerified = _retrieveData("isEmailVerified");
    if (!isEmailVerified) {
      return "";
    } else {
      return isEmailVerified;
    }
  } catch (e) {
    alert(e?.msg)
  }
};

export const isNumberVerified = () => {
  try {
    const isNumberVerified = _retrieveData("isNumberVerified");
    if (!isNumberVerified) {
      return "";
    } else {
      return isNumberVerified;
    }
  } catch (e) {
    alert(e?.msg)
  }
};
