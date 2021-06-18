import { combineReducers } from "redux";

import service from "./service";
import auth from "./auth";
import contact from "./contact";
import slot from "./slot";

export default combineReducers({
  service,
  auth,
  contact,
  slot,
});