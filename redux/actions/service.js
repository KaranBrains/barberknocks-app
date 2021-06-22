import * as api from "../api";
import { ADMIN_ALL_SERVICES } from "../constants/index";

export const allService = () => async (dispatch) => {
  try {
    const { data } = await api.allService();
    dispatch({ type: ADMIN_ALL_SERVICES, data });
  } catch (e) {
    alert(e.response?.data);
  }
};
