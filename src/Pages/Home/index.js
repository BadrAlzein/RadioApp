import { Container } from "@mui/material";
import TopBar from "./../../components/TopBar";
import StationsList from "./../../components/StationsList";
import BottomBar from "./../../components/BottmBar";
import Box from "@mui/material/Box";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./styles.css"
export const Home = () => {
  const [radioStatus, setRadioStatus] = useState(false); //false for turned off true for turned on
  return (
    <>
      <Container style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Box
          sx={{
            borderRadius: "20px",
            width: "300px",
            height: 420,
            backgroundColor: "#383945",

          }}
        >
          {!radioStatus ? <div className="welcomPage" >
            <PowerSettingsNewIcon className="topBar-icons turnOn" onClick={() => setRadioStatus(true)} />
            <p>TURN ON THE RADIO TO START</p>
          </div>
            :
            <>
              <Box
                sx={{
                  borderRadius: "20px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  height: "60px",
                  backgroundColor: "#EDAE60",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TopBar setRadioStatus={setRadioStatus} />
              </Box>

              <Box
                sx={{
                  height: "300px",
                  overflow: "scroll"
                }}
              >
                <StationsList />
              </Box>

              <Box
                sx={{
                  borderRadius: "20px",
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "0px",
                  height: "60px",
                  backgroundColor: "#22232B",
                  borderTop: "1px solid #3C3E4A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <BottomBar />
              </Box>
            </>
          }

        </Box>
      </Container>
    </>
  );
};

export default Home;
