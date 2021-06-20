import { combineReducers } from "redux";

import service from "./service";
import auth from "./auth";
import contact from "./contact";
import slot from "./slot";
import main from "./auth";
import bookings from "./bookings";


export default combineReducers({
  service,
  auth,
  contact,
  slot,
  main,
  bookings,
});