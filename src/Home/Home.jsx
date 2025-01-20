import React from "react";
import "./Home.css";
import aa from "./aa.svg";
export default function Home() {
  return (
    <div className="home text-center p-3 ">
      <div>
        <img className="mb-3" src={aa} />
      </div>
      <div className="text-center text-white pt-4" >
        <h2 className="fw-bold text-uppercase  mb-3 fs-1">start Framework</h2>
        <div className="star mb-3">
          <div className="line bg-white me-3"></div>
          <i class="fa-solid fa-star"></i>
          <div className="line  bg-white ms-3"></div>
        </div>
      </div>
      <div className=" text-white pb-5 ">Graphic Artist - Web Designer - Illustrator</div>
    </div>
  );
}
