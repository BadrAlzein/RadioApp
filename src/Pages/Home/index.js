import { Container, Typography } from "@mui/material";
import TopBar from "./../../components/TopBar";
import StationsList from "./../../components/StationsList";
import BottomBar from "./../../components/BottmBar";
import Box from "@mui/material/Box";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { ThemeProvider } from '@mui/material/styles';
import ThemeModeToggle from "./../../components/themeModeToggle";
import { useSelector } from "react-redux";
import "./styles.css"
import * as CONSTS from "./../../constants"
export const Home = () => {
  const [radioStatus, setRadioStatus] = useState(false); //false for turned off true for turned on
  const theme = useSelector(state => state.theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Box
            sx={{
              borderRadius: "20px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px"
            }}
          >
            <ThemeModeToggle />
          </Box>
          <Box
            sx={{
              borderRadius: "20px",
              width: "300px",
              height: 420,
              backgroundColor: theme.palette.background.main,
            }}
          >
            {!radioStatus ?
              <div className="welcomPage" >
                <PowerSettingsNewIcon className={`topBar-icons turnOn ${theme.type === CONSTS.DARK ? "turnOn-dark" : "turnOn-light"}`} onClick={() => setRadioStatus(true)} />
                <Typography variant="h6" color={theme.palette.text.welcomePage}>TURN ON THE RADIO TO START</Typography>
              </div>
              :
              <>
                <Box
                  sx={{
                    borderRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "60px",
                    backgroundColor: theme.palette.background.topBar,
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
                    overflow: "scroll",

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
                    backgroundColor: theme.palette.background.bottomBar,
                    borderTop: `1px solid ${theme.palette.borders.bottomBar}`,
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
      </ThemeProvider>
    </>
  );
};

export default Home;
