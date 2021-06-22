import { CONTACT_US } from "../constants";

export default (state = { contactData: null }, action) => {
  switch (action.type) {
    case CONTACT_US:
      return { ...state, contactData: action?.data };
    default:
      return state;
  }
};
