import ThemeModeToggle from "./../themeModeToggle";
import configureStore from 'redux-mock-store';
import * as CONST from "./../../constants";
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup } from "@testing-library/react";
const mockStore = configureStore([]);

describe('themeModel Toggle tests', () => {
 let store;
 let component;
 let themeButton;
  beforeEach(() => {
    store = mockStore({
      theme:{
          type: CONST.DARK,
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <ThemeModeToggle />
      </Provider>
    );
    themeButton= component.root.findByType('button');
    });
    afterEach(()=>{
        cleanup()
    })
    it('renderes correctly',() => {
        expect(component).toBeDefined();
        expect(themeButton).toBeDefined();
    })
    it('match snapshot',() => {
        expect(component.toJSON()).toMatchSnapshot();
    })
    it('button renders correctly with dark mode',() => {
        //the button label should be a sun icon
        expect(themeButton._fiber.stateNode.children[0].text).toBe("🔆");
    })
    it('button works correctly with clicking',() => {  
        renderer.act(() => {
            themeButton.props.onClick();
        });
       //the fliptheme payload should be in the reducers
        expect(store.getActions()[0].type).toBe(CONST.THEME);
        expect(store.getActions()[0].payload.type).toBe(CONST.LIGHT);
    })
})
