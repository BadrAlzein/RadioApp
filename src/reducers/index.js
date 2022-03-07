import { combineReducers } from "redux";
import stations from "./Stations";
import currentStation from "./CurrentStation";
const reducers = combineReducers({
  stations,
  currentStation
});

export default reducers;
