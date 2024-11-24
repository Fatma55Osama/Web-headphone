import React from "react";
import headphon1 from '../assets/headphon1.png'
import headphon2 from '../assets/headphon2.png'
import headphon3 from '../assets/headphon3.png'

export default function Comp6() {
  return (
    <div className="div6 col-12 d-flex flex-column align-content-end align-items-end justify-content-end">
      <div className=" phon col-12  h-100 d-flex flex-column align-content-between  gap-5 ">

        <div className="color d-flex flex-column align-items-center gap-3">
        <h2>Available Colors</h2>
        <span>FIND YOUR COLOR</span>
        </div>

        <div className="all d-flex justify-content-center align-content-center col-12 gap-1 text-center">
        <div className="col-3 col-md-4 col-lg-3  d-flex flex-column justify-content-center align-items-center ">
            <img src={headphon1} width="285px" alt="" />
            <h4>BEATS SOLO3 <br></br>
            WIRELESS - BLACK</h4>
            <p>$299.95</p>
        </div>

        <div className="col-3 col-md-4 col-lg-3  d-flex flex-column justify-content-center align-items-center">
        <img src={headphon3} width="285px" alt="" />
        <h4>BEATS SOLO3 <br></br>
          WIRELESS - ROSE</h4>
            <p>$259.95</p>
        </div>

        <div className="col-3 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center">
        <img src={headphon2} width="285px" alt="" />
        <h4>BEATS SOLO3 <br></br>
          WIRELESS - BLUE</h4>
            <p>$289.95</p>
        </div>
        </div>
      </div>
    </div>
  );
}
