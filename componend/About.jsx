import React from "react";

export default function About() {
  return (
    <div className=" bg_About vh-100 d-flex justify-content-center align-items-center  flex-wrap text-light">
      <div className="container">
        <h2 className="w-100 mainaddress">about component</h2>
        <div className="mainaddress">
          ــــــــــــــ{" "}
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          ــــــــــــــ
        </div>
        <div className="d-flex ">
          <div className="w-50 mx-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="w-50  mx-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </div>
  );
}
