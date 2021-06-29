import * as api from "../api";
import { CONFIRM_RIDE_CASH} from "../constants/index";
import jwt from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const confirmRideCash = (slot ,navigation) => async (dispatch) => {
    try {
        const user = jwt(await _retrieveData("token"));
        const address = await _retrieveData("address");
        const formData = {
            slot : slot,
            client: user.id,
            address: address
        }
        console.log(formData)
        // console.log(address);
        const { data } = await api.confirmRideCash(formData,address);
        console.log(data)
        dispatch({ type: CONFIRM_RIDE_CASH, data });
        alert("Booking Confirmed")
        navigation.navigate('BookingDetails', {  id: data._id})
    } catch (e) {
        console.log(e);
        alert(e)
    }
};

// export const confirmRideOnline = (router) => async (dispatch) => {
//     try {
//         const session = localStorage.getItem("session");
//         const address = localStorage.getItem("address");
//         const { data } = await api.confirmRideOnline(session,address);
//         dispatch({ type: CONFIRM_RIDE_ONLINE, data });
//         swal({
//             text: "Booking Confirmed",
//             icon: "success",
//         });
//         router.push('/booking-details/'+data._id)
//     } catch (e) {
//         swal({
//             text: e.response?.data.msg,
//             icon: "error",
//         });
//     }
// };

// export const getRideById = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.getRideById(id);
//         dispatch({ type: GET_RIDE_BY_ID, data });
//     } catch (e) {
//         console.log(e.response);
//         swal({
//             text: e.response?.data.msg,
//             icon: "error",
//         });
//     }
// };

// export const getMyRides = () => async (dispatch) => {
//     try {
//         const user = jwt(localStorage.getItem("token"));
//         const { data } = await api.getRides(user.id);
//         dispatch({ type: GET_MY_RIDES, data });
//     } catch (e) {
//         console.log(e.response);
//         swal({
//             text: e.response?.data.msg,
//             icon: "error",
//         });
//     }
// };