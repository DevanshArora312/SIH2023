import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import HighlightedText from "../components/HighlightedText";
import girlStudying from "../assets/girlStudying.mp4";
import Line from "../components/Line";
import logo1 from '../assets/fi-sr-badge.svg';
import logo2 from '../assets/fi-sr-diamond.svg';
import logo3 from '../assets/fi-sr-fox.svg';
import logo4 from '../assets/fi-sr-graduation-cap.svg';
function Landing() {
  return (
    <div className="bg-white w-screen min-h-screen overflow-x-hidden">
      <div className="flex justify-center items-center py-12">
        <Link
          to="/signup"
          className="group text-xl flex justify-center items-center gap-2 text-gray-700 bg-[#ffd60a] py-[12px] px-[28px] rounded-md duration-200 hover:scale-95 hover:text-gray-700"
        >
          Learn now{" "}
          <FaArrowRight className="duration-200 group-hover:translate-x-2 text-gray-700 translate-y-[2px]" />
        </Link>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="text-center text-slate-800 text-3xl font-semibold">
          Empowering Education through Innovation:{" "}
          <HighlightedText>Uniting Minds, Sharing Insights</HighlightedText>
        </div>
        <div className="text-center text-slate-700">
          A place which allows students to explore and learn from projects
          conducted by their peers in different institutions, promoting
          cross-pollination of ideas and collaborative learning.
        </div>
        <div className="flex justify-center item-center">
          <video
            autoPlay
            loop
			muted
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
            className="w-full my-12"
          >
            <source src={girlStudying}></source>
          </video>
        </div>
      </div>
      <div className="flex flex-col justify-between relative">
        <div className="flex items-center gap-[1.25rem]">
          <div style={{ boxShadow: "0px 0px 62px 0px rgba(0, 0, 0, 0.12)" }} className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center">
            <img src={logo1}></img>
          </div>
          <div>
            <div className="text-slate-800 font-bold text-lg">
              Leadership
            </div>
            <div>Fully committed to the success company</div>
          </div>
        </div>
        <Line />
        <div className="flex items-center gap-[1.25rem]">
          <div style={{ boxShadow: "0px 0px 62px 0px rgba(0, 0, 0, 0.12)" }} className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center">
            <img src={logo2}></img>
          </div>
          <div>
            <div className="text-slate-800 font-bold text-lg">
              Responsibility
            </div>
            <div className="text-slate-700 text-sm">
              Students will always be our top priority
            </div>
          </div>
        </div>
        <Line />
        <div className="flex items-center gap-[1.25rem]">
          <div
            style={{ boxShadow: "0px 0px 62px 0px rgba(0, 0, 0, 0.12)" }}
            className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center"
          >
            <img src={logo3}></img>
          </div>
          <div>
            <div className="text-slate-800 font-bold text-lg">
              Flexibility
            </div>
            <div>The ability to switch is an important skills</div>
          </div>
        </div>
        <Line />
        <div className="flex items-center gap-[1.25rem]">
          <div
            style={{ boxShadow: "0px 0px 62px 0px rgba(0, 0, 0, 0.12)" }}
            className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center"
          >
            <img src={logo4}></img>
          </div>
          <div>
            <div className="text-slate-800 font-bold text-lg">
              Solve the problem
            </div>
            <div>Code your way to a solution</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
