import { Grid } from "@mui/material";
import "./styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch } from "react-redux";
import * as Connection_CONST from "./../../constants";
export const Index = () => {
  const dispatch = useDispatch();
  const closeRadio = () => {
    dispatch({
      type: Connection_CONST.START,
      payload: {}
    });
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className="topBar-container"
      >
        <Grid item>
          <ArrowBackIosIcon
            className="topBar-icons"
            onClick={() => {
              alert("Not yet implemented");
            }}
          />
        </Grid>
        <Grid item>
          <p>STATIONS</p>
        </Grid>
        <Grid item>
          <PowerSettingsNewIcon className="topBar-icons" onClick={closeRadio} />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
