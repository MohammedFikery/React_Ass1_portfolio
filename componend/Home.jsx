import React from "react";
import image1 from "../img/avataaars.svg";

export default function Home() {
  return (
    <div className="bg_About text-light">
      <div className=" vh-100 container  d-flex justify-content-center align-items-center text-white flex-wrap">
        <div>
          <div>
            <img src={image1} className="w-100" alt="avataaars" />
          </div>
          <h2 className="w-100 mainaddress">start Framework</h2>
          <div className="mainaddress">
            ــــــــــــــ
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            ــــــــــــــ
          </div>
          <h6>Graphic Artist - Web Designer - Illustrator</h6>
          <div></div>
        </div>
      </div>
    </div>
  );
}
