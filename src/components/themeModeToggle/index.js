import "./styles.css";
import * as themeActions from "./../../actions/theme";
import { useDispatch, useSelector } from "react-redux";
import * as CONST from "./../../constants"
export const Home = () => {
    const isDark = useSelector(state => state.theme).type === CONST.DARK;
    const dispatch = useDispatch();
    const flipTheme = () => {
        isDark
            ? themeActions.setThemeMode(CONST.LIGHT, dispatch)
            : themeActions.setThemeMode(CONST.DARK, dispatch)
    }
    return (
        <p>
            <button onClick={flipTheme} className={`themeButton ${isDark ? "darkButton" : "lightButton"}`}>
                {isDark ? "🔆" : "🌙"}
            </button>
        </p>
    );

}
export default Home;