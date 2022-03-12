import { Grid } from "@mui/material";
import "./styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch } from "react-redux";
import * as playingListAction from "./../../actions/playingList";
export const Index = (props) => {
  const { setRadioStatus } = props;
  const dispatch = useDispatch();
  const closeRadio = () => {
    playingListAction.close(dispatch);
    setRadioStatus(false);
  };
  const backRadio = () => {
    playingListAction.back(dispatch);
  }
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
          {
            <ArrowBackIosIcon
              className="topBar-icons backButton"
              onClick={
                backRadio
              }
            />}
        </Grid>
        <Grid item>
          <p>STATIONS</p>
        </Grid>
        <Grid item>
          <PowerSettingsNewIcon className="topBar-icons closeButton " onClick={closeRadio} />
        </Grid>
      </Grid>
    </>
  );
};
/* dg0HtaDxPl8cbB2FYHtCgH3ywCdE - e7k9JhxeT_uvqI

fc7edce9 - 9ffa - 4113 - a393 - be5371fb358e */
export default Index;
