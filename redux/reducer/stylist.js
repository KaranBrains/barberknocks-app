import {
  ADMIN_ALL_STYLISTS,
  ADMIN_GET_STYLIST_BY_ID,
} from "../constants/index";

export default (state = { AllData: null, stylistById: null }, action) => {
  switch (action.type) {
    case ADMIN_ALL_STYLISTS:
      return { ...state, AllData: action?.data };
    case ADMIN_GET_STYLIST_BY_ID:
      console.log("data2");
      return { ...state, stylistById: action?.data };
    default:
      return state;
  }
};
