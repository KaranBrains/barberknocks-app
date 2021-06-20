import * as api from "../api";
import {
  ADMIN_ALL_SLOT,
  GET_SLOT_BY_ID,
  SERVICE_SLOT,
} from "../constants/index";

export const AllSlots = () => async (dispatch) => {
  try {
    const { data } = await api.allSlot();
    dispatch({ type: ADMIN_ALL_SLOT, data });
  } catch (e) {
    alert(e.response?.data.msg);
  }
};

export const ServiceSlots = (service, city) => async (dispatch) => {
  try {
    console.log("Hi");
    const { data } = await api.serviceSlot(service, city);
    console.log(data);
    dispatch({ type: SERVICE_SLOT, data });
  } catch (e) {
    alert(e.response?.data.msg);
  }
};

export const GetSlotById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSlotById(id);
    dispatch({ type: GET_SLOT_BY_ID, data });
  } catch (e) {
    alert(e.response?.data.msg);
  }
};
