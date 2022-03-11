import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Station from "./Station";
import { useSelector, useDispatch } from "react-redux";
import * as playingList from "./../../actions/playingList"
export const Index = () => {
  //get the stations from the redux store
  const stations = useSelector((state) => state.stations).radios || [];
  //next station
  const dispatch = useDispatch();
  /**
   *  will add the next station on the stations to the playing list
   * @param {index of the pressed channel} index 
   */
  const next = (index) => {
    //loop
    if (index === stations.length - 1) {
      playingList.add(stations[0], dispatch);
    } else {
      playingList.add(stations[index + 1], dispatch);
    }
  }
  /**
  *  will add the next station on the stations to the playing list
  * @param {index of the pressed channel} index 
  */
  const previous = (index) => {
    //loop
    if (index === 0) {
      playingList.add(stations[stations.length - 1], dispatch);
    } else {
      playingList.add(stations[index - 1], dispatch);
    }
  }
  //mange toggled menues
  return (
    <>
      {stations ? (
        <List sx={{ width: "100%", maxWidth: 360, color: "#A0A8BA" }}>
          {stations.map((station, index) => {
            return (
              <div key={index}>
                <Station
                  next={next}
                  previous={previous}
                  station={station}
                  index={index}
                  data-toggle="collapse"
                />
                <Divider variant="middle" />
              </div>
            );
          })}
        </List>
      ) : (
        <p>Loading .. </p>
      )}
    </>
  );
};

export default Index;
