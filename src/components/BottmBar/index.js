import { useSelector } from "react-redux";
import "./styles.css";

export const Index = () => {
  const playList = useSelector((state) => state.playList);
  const currentStation = playList.playingHistory[playList.currentStationIndex];
  const themeText = useSelector(state => state.theme).palette.text;
  return (
    <>
      {playList.currentStationIndex !== -1 &&
        <div className="BottomBar"  >
          <span className="BottomBar-header" style={{ color: themeText.bottomBarHeader }}>CURRENTLY PLAYING</span>
          <br />
          <span className="stationName" style={{ color: themeText.radioStations }}>{currentStation.name}</span>
        </div>
      }

    </>
  );
};

export default Index;
