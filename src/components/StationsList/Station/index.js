import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import * as playingList from "./../../../actions/playingList"
import "./styles.css";
export const Index = ({ index, station, next, previous }) => {
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.playList);
  const currentStation = playList.playingHistory[playList.currentStationIndex];
  const theme = useSelector(state => state.theme);
  // handle opening and closing menu as well as starting the radio
  const handleClick = () => {
    //if the user closed the radio the redux stored current_radio will be cleared
    station === currentStation ?
      playingList.close(dispatch) :
      playingList.add(station, dispatch);
  };

  return (
    <div style={{ color: theme.palette.text.radioStations }}>
      <Collapse
        in={station === currentStation}
        timeout="auto"
        unmountOnExit
        className="stationCollapse"
      >
        <div className={theme.type === "DARK" ? "station-detail-container-dark" : "station-detail-container-light"}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <RemoveCircleOutlineIcon
                onClick={
                  () => { previous(index) }
                }
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
                  next(index)
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Collapse>
      <ListItem
        className={theme.type === "DARK" ? "stationsList-Item-dark" : "stationsList-Item-light"}
        onClick={handleClick}
        secondaryAction={
          <ListItemText primary={<h3>{station.frequency}</h3>} />
        }
      >
        <ListItemText primary={station.name} />
      </ListItem>
    </div>
  );
};

export default Index;