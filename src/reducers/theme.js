import * as CONSTS from "../constants";
import { dark, light } from "./../styles/themes"

const theme = (theme, action) => {
    switch (action.type) {
        //if it is a theme request
        case CONSTS.THEME:
            //save in local storage
            localStorage.setItem('theme', action.payload.type)
            //return to user
            return action.payload;
        default:
            //init value of the theme
            let defaultTheme = localStorage.getItem('theme') === CONSTS.LIGHT
                ? light : dark;
            return defaultTheme;
    }
};

export default theme;
