import * as api from "../api";
import { ADMIN_ALL_STYLISTS } from "../constants/index";

export const AllStylist = () => async (dispatch) => {
  try {
    const { data } = await api.allStylist();
    dispatch({ type: ADMIN_ALL_STYLISTS, data });
  } catch (e) {
    console.log(e.response);
    alert(e.response?.data.msg);
  }
};
