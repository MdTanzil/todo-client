import { Outlet } from "react-router-dom";
import DashBoardNav from "../components/DashBoardNav";
import NavBar from "../navbar/NavBar";


const DashBoardLayout = () => {
    return (
       <>
       <div>
        <NavBar></NavBar>
       </div>
        <div className="max-w-[1280px] mx-auto flex">
            <DashBoardNav></DashBoardNav>
        <div className="divider divider-primary ">  </div>
            <div className="mt-20">
                <Outlet> </Outlet>
            </div>
        </div></>
    );
};

export default DashBoardLayout;