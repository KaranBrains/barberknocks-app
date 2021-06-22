import * as api from "../api";
import {
  ADMIN_ALL_STYLISTS,
  ADMIN_GET_STYLIST_BY_ID,
  ADMIN_STYLIST_ADD,
} from "../constants/index";

export const AllStylist = () => async (dispatch) => {
  try {
    const { data } = await api.allStylist();
    dispatch({ type: ADMIN_ALL_STYLISTS, data });
  } catch (e) {
    console.log(e.response);
    alert(e.response?.data.msg);
  }
};
export const GetStylistById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getStylistById(id);
    dispatch({ type: ADMIN_GET_STYLIST_BY_ID, data });
  } catch (e) {
    console.log(e.response);
    alert(e.response?.data.msg);
  }
};

export const AddStylist = (formData, navigation) => async (dispatch) => {
  try {
    const { data } = await api.addStylist(formData);
    dispatch({ type: ADMIN_STYLIST_ADD, data });
    alert("Stylist Added");
    navigation.navigate("Home");
  } catch (e) {
    console.log(e.response);
    alert(e.response?.data.msg);
  }
};
