import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h3>Radio App</h3>

      <p>
        {" "}
        Badr Alzein <br />
        01.03.2022 <br />
        React JS | Material UI | react-redux
      </p>

      <hr />
      <br />
      <Outlet />
      <br />
      <hr />
      <p> Here are things you can do with this app:</p>
      <ul style={{ textAlign: "left" }}>
        <li>Press on any radio station will PLAY that station. Pressing it again will STOP this station.</li>
        <li>Press on the TURN-OFF button (top right) will stop current playing Radio and remove your playing history.</li>
        <li>Press on the BACK button (top left) will return you back to the last played radio station.</li>
        <li>Press on the + after pressing on any Station to move you downwards in the stations list and loop to the top.</li>
        <li>Press on the - after pressing on any Station to move you upwards in the stations list and loop to button.</li>
      </ul>
    </>
  );
};

export default Layout;
