import { combineReducers } from "redux";

import service from "./service";
import main from "./auth";
import bookings from "./bookings";

export default combineReducers({
  service,
  main,
  bookings,
});
