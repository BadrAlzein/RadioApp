import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import * as Connection_CONST from "./../../../constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./styles.css";
export default (porps) => {
  const { station, index, selectedIndex, setSelectedIndex } = porps;
  const dispatch = useDispatch();

  /** get the current station
   * Begründung für  ->  && currentStationName
   *  the case where the TURN OFF Button is clicked in this case last opend station
   */
  const undefinedCurrenStation =
    useSelector((state) => state.currentStation).name === undefined;

  // handle opening and closing menu as well as starting the radio
  const handleClick = () => {
    //toggole between the stations
    if (selectedIndex === index) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(index);
    }
    //if the user closed the radio the redux stored current_radio will be cleared
    dispatch({
      type: Connection_CONST.START,
      payload: index === selectedIndex ? {} : station
    });
  };
  //on load
  useEffect(() => {
    //if the user tuned off the radio reset the selected Index
    undefinedCurrenStation && setSelectedIndex("");
  });

  return (
    <>
      <Collapse
        in={index === selectedIndex && !undefinedCurrenStation}
        timeout="auto"
        unmountOnExit
      >
        <div className="station-detail-container">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <RemoveCircleOutlineIcon
                onClick={() => {
                  alert("Not yet implemented");
                }}
              />
            </Grid>
            <Grid item>
              <img
                src={station.image}
                alt="Station logo"
                loading="lazy"
                width="100x"
                height="100px"
              />
            </Grid>
            <Grid item>
              <AddCircleOutlineIcon
                onClick={() => {
                  alert("Not yet implemented");
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Collapse>
      <ListItem
        className="stationsList-Item"
        onClick={handleClick}
        secondaryAction={
          <ListItemText primary={<h3>{station.frequency}</h3>} />
        }
      >
        <ListItemText primary={station.name} />
      </ListItem>
    </>
  );
};
