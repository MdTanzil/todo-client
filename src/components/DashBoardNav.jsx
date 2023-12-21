// import React from 'react';

import useAuth from "../hooks/useAuth";
import { RiCalendarTodoFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { IoIosDoneAll } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
const DashBoardNav = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    // <!-- component -->
    <div>
      {/* // <!-- component --> */}
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          {user?.photoURL ? (
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          ) : (
            <div className="avatar placeholder online ">
              <div className="w-12 bg-neutral text-neutral-content rounded-full">
                <span className="text-xl">{user?.displayName[0]}</span>
              </div>
            </div>
          )}

          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
            {" "}
            {user?.displayName}
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <MdDashboardCustomize />
            </div>
            Dashboard
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <RiCalendarTodoFill />
            </div>
            ToDo
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <TfiWrite />
            </div>
            Ongoing
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <IoIosDoneAll />
            </div>
            Done
          </div>
         
           
           
            
          
         
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            Log Out
          </div>
        </nav>
      </div>
      <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1"></div>
      </div>
      
    </div>
  );
};

export default DashBoardNav;
