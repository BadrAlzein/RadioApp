import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h3>Recruiting Task - Frontend</h3>

      <p>
        {" "}
        Badr Alzein <br />
        01.03.2022 <br />
        React JS | Material UI | react-redux
      </p>
      <hr />
      <br />
      <Outlet />
    </>
  );
};

export default Layout;
