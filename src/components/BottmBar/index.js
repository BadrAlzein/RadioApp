import { useSelector } from "react-redux";
import "./styles.css";

export const Index = () => {
  const playList = useSelector((state) => state.playList);
  return (
    <>
      {playList.currentStationIndex !== -1 &&
        <div className="BottomBar"  >
          <span className="BottomBar-header">CURRENTLY PLAYING</span>
          <br />
          <span className="stationName">{playList.playingHistory[playList.currentStationIndex].name}</span>
        </div>
      }

    </>
  );
};

export default Index;
