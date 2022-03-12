import { createTheme } from '@mui/material/styles';
import * as CONST from "./../../constants/index"
export const light = createTheme({
    type: CONST.LIGHT,
    palette: {
        background: {
            main: "#ededed",
            bottomBar: "#c8baba",
            topBar: "#EDAE60"
        },
        borders: {
            bottomBar: "#c8baba"
        },
        text: {
            welcomePage: "black",
            radioStations: "#443939",
            bottomBarHeader: "black"
        },
    }

})
export const dark = createTheme({
    type: CONST.DARK,
    palette: {
        background: {
            main: "#383945",
            bottomBar: "#22232B",
            topBar: "#EDAE60"
        },
        borders: {
            bottomBar: "#3C3E4A"
        },
        text: {
            welcomPage: "white",
            radioStations: "#A0A8BA",
            bottomBarHeader: "#edae60"
        }
    }
});

