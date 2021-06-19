import { ADMIN_ALL_STYLISTS } from "../constants/index";

export default (state = { AllData: null, stylistById: null }, action) => {
  switch (action.type) {
    case ADMIN_ALL_STYLISTS:
      return { ...state, AllData: action?.data };
    default:
      return state;
  }
};
