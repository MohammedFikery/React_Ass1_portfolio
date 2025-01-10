import React from "react";
export default function Footer() {
  return (
    <div className="text-light">
      <div className=" bg-Footer  p-5">
        <div className="row">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <ul className="d-flex justify-content-center Fotter-ul ">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
