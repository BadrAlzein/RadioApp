import * as CONSTS from "../constants";

const playList = (playList = { playingHistory: [], currentStationIndex: -1 }, action) => {
  switch (action.type) {
    //get the current station
    case CONSTS.ADD:
      let newplayingHistory = [...playList.playingHistory, action.payload];
      return { playingHistory: newplayingHistory, currentStationIndex: playList.currentStationIndex + 1 };
    case CONSTS.CLOSE:
      return { playingHistory: [], currentStationIndex: -1 };
    case CONSTS.BACK:
      if (playList.currentStationIndex !== -1) {
        return { ...playList, currentStationIndex: playList.currentStationIndex - 1 };
      }
    default:
      return playList;
  }
};

export default playList;
