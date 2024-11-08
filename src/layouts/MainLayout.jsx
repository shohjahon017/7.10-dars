import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function MainLayout({ children }) {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      {" "}
      <div>
        <LeftBar></LeftBar>
      </div>
      <div className="w-[61vw ] mx-auto">{children}</div>
      <div>
        <RightBar></RightBar>
      </div>
      {/* <div className="h-[70px]  bg-blue-600 text-white fixed bottom-0 z-10 w-full "></div> */}
    </div>
  );
}

export default MainLayout;
