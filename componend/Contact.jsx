import React from "react";

export default function Contact() {
  return (
    <div className="container-fluid vh-100">
      <h2 className="w-100 mainaddress">conatct section</h2>
      <div className="mainaddress">
        ــــــــــــــ
        <span>
          <i className="fa-solid fa-star"></i>
        </span>
        ــــــــــــــ
      </div>
      <div>
        <form className="w-50 p-3 mx-auto mt-5">
          <input
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 mb-5 border-bottom py-3 "
          />
          <input
            type="number"
            placeholder="UserAge"
            name="UserAge"
            className="form-control border-0 mb-5 border-bottom py-3"
          />
          <input
            type="email"
            placeholder="userEmail"
            name="userEmail"
            className="form-control border-0 mb-5  border-bottom py-3"
          />
          <input
            type="password"
            placeholder="userPasswoed"
            name="userPasswoed"
            className="form-control mb-5  border-0 border-bottom py-3"
          />
          <button type="button" className="btn btn-primary btn-Custom">
            {" "}
            send Message{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
