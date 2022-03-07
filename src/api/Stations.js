import axios from "axios";
import * as Connection_CONST from "./../constants";

/**
 * hier wird die API request GET durchgeführt
 */

export const get = (dispatch) => {
  axios.get(Connection_CONST.STATIONS_API_URL).then((response) => {
    dispatch({
      type: Connection_CONST.GET,
      payload: response.data
    });
  });
};
