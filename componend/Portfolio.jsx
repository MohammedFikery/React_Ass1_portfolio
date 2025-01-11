import React from "react";
import image_1 from"../img/poert1.png";
import image_2 from"../img/port2.png";
import image_3 from"../img/port3.png";
export default function Portfolio() {
  return (
    <div>
      <div className="container">
        <h2 className="w-100 mainaddress">portfolio component</h2>
        <div className="mainaddress">
          ــــــــــــــ
          <span><i className="fa-solid fa-star"></i></span>
          ــــــــــــــ
        </div>
        <div className="row g-5 mb-5">
          <div className="col-md-4">
            <div className="position-relative">
              <img className="w-100" src={image_1} alt="Port1" />
              <div className="layer icon_protfolio  bg_About w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-wrap">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <img className="w-100" src={image_2} alt="Port3" />
              <div className="layer icon_protfolio  bg_About w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-wrap">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <img className="w-100" src={image_3} alt="Port3" />
              <div className="layer icon_protfolio  bg_About w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-wrap">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <img className="w-100" src={image_1} alt="Port1" />
              <div className="layer icon_protfolio  bg_About w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-wrap">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <img className="w-100" src={image_2} alt="Port3" />
              <div className="layer icon_protfolio  bg_About w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-wrap">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <img className="w-100" src={image_3} alt="Port3" />
              <div className="layer icon_protfolio  bg_About w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-wrap">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
