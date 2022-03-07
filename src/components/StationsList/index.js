import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Station from "./Station";
import { useState } from "react";
import { useSelector } from "react-redux";
export const Index = () => {
  //get the stations from the redux store
  const stations = useSelector((state) => state.stations).radios || [];
  //mange toggled menues
  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <>
      {stations ? (
        <List sx={{ width: "100%", maxWidth: 360, color: "#A0A8BA" }}>
          {stations.map((station, index) => {
            return (
              <div key={index}>
                <Station
                  station={station}
                  data-toggle="collapse"
                  index={index}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
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
