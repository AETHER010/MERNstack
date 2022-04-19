import React from "react";
import { Route, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
//import css
import "./Cover.css";

const Cover = () => {
  return (
    <div className="cover-main justify-center w-full flex flex-wrap">
      <div class="content-contain">
        <div className="container">
          <div className="font-bold text-3xl text-red-700 flex justify-center items-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Donate Blood & Save Life")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Donate Blood & Save Life")
                  .start();
              }}
            />
          </div>
          <p className="text-center text-white opacity-90 text-xl mt-3 mb-3">
            The benefits of donating blood include helping people injured in
            accidents,
            <br /> undergoing cancer treatment, and battling blood diseases,
            among other reasons.
          </p>
        </div>
        <div className="cover-container row opacity-90 ">
          <div className="cover-link col-lg-4 col-md-6 col-xs-12">
            <Link className="btn" id="login_btn" to="/donatefund">
              <span>Donate Funds</span>
            </Link>
          </div>
          <div className="cover-link col-lg-4 col-md-6 col-xs-12">
            <Link to="/donar" className="btn" id="login_btn">
              <span>Donate</span>
            </Link>
          </div>
          <div className="cover-link col-lg-4 col-md-6 col-xs-12">
            <Link to="/request" className="btn" id="login_btn">
              <span>Request</span>
            </Link>
          </div>
          <div className="cover-text"></div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
