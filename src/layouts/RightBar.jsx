import React from "react";
import user from "../assets/user.svg";
import union from "../assets/union.svg";
import comment from "../assets/comment.png";

function RightBar() {
  return (
    <div>
      {" "}
      <div className="w-[20vw] fixed h-[100vw] bg-black text-white right-0 top-0 ">
        <div className="flex mx-5 mt-[29px]">
          <h4>Friend Activity</h4>
          <div className="flex pl-[97px] gap-4 ">
            <img src={user} alt="" />
            <img src={union} alt="" />
          </div>
        </div>{" "}
        <p className="mx-5 max-w-[306px] mt-[39px] ">
          Let friends and followers on Spotify see what you’re listening to.
        </p>
        <div className="mx-5 my-[23px] flex flex-col gap-5">
          {" "}
          <img src={comment} alt="" />
          <img src={comment} alt="" />
          <img src={comment} alt="" />
        </div>
        <p className="mx-5 max-w-[306px] mt-[21px] ">
          Go to Settings Social and enable “Share my listening activity on
          Spotify.’ You can turn this off at any time.
        </p>
        <button className="mx-[56px] bg-white text-black rounded-[40px] px-[63px] py-[19px] font-bold mt-[23px] ml-[56px]">
          SETTINGS
        </button>
      </div>
    </div>
  );
}

export default RightBar;