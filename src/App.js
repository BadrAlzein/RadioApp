import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Stations from "./actions/Stations";
import "./styles.css";
export default function App() {
  /**
   * get the Radio-API date on loading the app and save them in the redux store
   */
  const dispatch = useDispatch();
  useEffect(() => {
    //get the stations from API
    dispatch(Stations.get());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
