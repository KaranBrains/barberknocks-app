import * as api from "../api";
import {
  GET_MY_BOOKINGS,
  ALL_BOOKINGS,
  GET_BOOKING_BY_ID,
} from "../constants/index";
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

export const UserBookings = () => async (dispatch) => {
  try {
    const user = jwt(await _retrieveData("token"));
    const { data } = await api.myBookings(user.id);
    dispatch({ type: GET_MY_BOOKINGS, data });
  } catch (e) {
    console.log(e);
    alert(e.response?.data.msg);
  }
};

export const AllBookingsDetails = () => async (dispatch) => {
  try {
    const { data } = await api.allBookings();
    dispatch({ type: ALL_BOOKINGS, data });
  } catch (e) {
    console.log(e.response);
    alert(e.response?.data.msg);
  }
};

export const GetBookingById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getBookingsById(id);
    dispatch({ type: GET_BOOKING_BY_ID, data });
  } catch (e) {
    console.log(e.response);
    alert(e.response?.data.msg);
  }
};
