import * as CONSTS from "./../constants";
/**
 * add new station to the playing list
 * @param {*} station 
 */
export const add = (station, dispatch) => {
    dispatch({
        type: CONSTS.ADD,
        payload: station
    });
};
/**
 * remove station from the playing list
 * @param {*} station 
 */
export const close = (dispatch) => {
    dispatch({
        type: CONSTS.CLOSE,
        payload: {}
    });
};

/**
 * back to last station in the playing list
 * @param {*} station 
 */
export const back = (dispatch) => {
    dispatch({
        type: CONSTS.BACK,
        payload: {}
    });
};

