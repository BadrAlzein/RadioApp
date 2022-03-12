import { combineReducers } from "redux";
import stations from "./Stations";
import playList from "./playList";
import theme from "./theme"
const reducers = combineReducers({
  stations,
  playList,
  theme
});

export default reducers;
