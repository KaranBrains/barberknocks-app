import * as api from "../api";
import { CONTACT_US } from "../constants";

export const contactUs = (formData, navigation) => async (dispatch) => {
  try {
    const { data } = await api.contactUs(formData);
    await dispatch({ type: CONTACT_US, data });
    alert(
      "We have received your message , we will try to get back to you ASAP."
    );
    navigation.navigate("Home");
  } catch (e) {
    alert(e.response?.data.msg);
  }
};
