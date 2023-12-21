import { Outlet } from "react-router-dom";
import DashBoardNav from "../components/DashBoardNav";
import NavBar from "../navbar/NavBar";
import { useState } from "react";


const DashBoardLayout = () => {
    const [selectedIndex = 0,setSelectedIndex] = useState(0)
    return (
       <>
       <div>
        <NavBar  ></NavBar>
       </div>
        <div className="max-w-[1280px] mx-auto flex">
            <DashBoardNav setSelectedIndex={setSelectedIndex}></DashBoardNav>
        <div className="divider divider-primary ">  </div>
            <div className="mt-20">
                <Outlet context={[selectedIndex,setSelectedIndex]}> </Outlet>
            </div>
        </div></>
    );
};

export default DashBoardLayout;