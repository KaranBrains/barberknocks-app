import { combineReducers } from "redux";

import service from "./service";
import auth from "./auth";

export default combineReducers({
   service,
   auth
});