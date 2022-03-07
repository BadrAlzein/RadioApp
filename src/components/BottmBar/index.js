import { useSelector } from "react-redux";
import "./styles.css";
export const Index = () => {
  const currentStation = useSelector((state) => state.currentStation);
  return (
    <>
      {currentStation.name && (
        <div className="BottomBar">
          <span className="BottomBar-header">CURRENTLY PLAYING</span>
          <br />
          <span className="stationName">{currentStation.name}</span>
        </div>
      )}
    </>
  );
};

export default Index;
