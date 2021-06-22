import {
  ADMIN_ALL_SLOT,
  GET_SLOT_BY_ID,
  SERVICE_SLOT,
} from "../constants/index";

export default (
  state = { slotData: null, slotDataById: null, slot: null, serviceSlot: null },
  action
) => {
  switch (action.type) {
    case ADMIN_ALL_SLOT:
      return { ...state, slotData: action?.data };
    case GET_SLOT_BY_ID:
      return { ...state, slot: action?.data };
    case SERVICE_SLOT:
      return { ...state, serviceSlot: action?.data };
    default:
      return state;
  }
};
