import { Container } from "@mui/material";
import TopBar from "./../../components/TopBar";
import StationsList from "./../../components/StationsList";
import BottomBar from "./../../components/BottmBar";
import Box from "@mui/material/Box";
export const Home = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            borderRadius: "20px",
            maxWidth: "300px",
            height: 420,
            backgroundColor: "#383945"
          }}
        >
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
            <TopBar />
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
        </Box>
      </Container>
    </>
  );
};

export default Home;
