import * as CONSTS from "./../constants";
import * as themes from './../styles/themes';
/**
 * change app theme
 * @param {*} station 
 */
export const setThemeMode = (mode, dispatch) => {
    dispatch({
        type: CONSTS.THEME,
        payload: mode === CONSTS.LIGHT ? themes.light : themes.dark
    });
};

