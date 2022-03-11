import { combineReducers } from "redux";
import stations from "./Stations";
import playList from "./playList";
const reducers = combineReducers({
  stations,
  playList
});

export default reducers;
