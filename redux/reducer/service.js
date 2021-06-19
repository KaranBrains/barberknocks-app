import { ADMIN_ALL_SERVICES } from "../constants/index";

export default (state = { AllData: null }, action) => {
  switch (action.type) {
    case ADMIN_ALL_SERVICES:
      return { ...state, AllData: action?.data };
    default:
      return state;
  }
};
