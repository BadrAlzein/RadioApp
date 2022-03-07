import * as Connection_CONST from "./../constants";

const currentStation = (station = {}, action) => {
  switch (action.type) {
    //get the current station
    case Connection_CONST.START:
      return action.payload;
    default:
      return station;
  }
};

export default currentStation;
