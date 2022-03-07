import * as Connection_CONST from "./../constants";

const Stations = (stations = [], action) => {
  switch (action.type) {
    //get the stations
    case Connection_CONST.GET:
      return formatStation(action.payload);
    default:
      return stations;
  }
};

export default Stations;

/**
 * format alle images of stations
 * https://dummyimage.com/400x400/3d43ff/ffffff&text=RadioOne
 */
const formatStation = (stations) => {
  let new_stations = [];
  stations.radios.map((station) => {
    let new_station = {
      ...station,
      image: station.image.replace("RadioOne", station.name)
    };
    new_stations = [...new_stations, new_station];
    return station;
  });
  return { ...stations, radios: new_stations };
};
