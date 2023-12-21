
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
        <NavBar></NavBar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
