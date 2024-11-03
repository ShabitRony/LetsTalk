import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./LetsTalk.css";

const LetsTalk = () => {
  return (
    <div className="container">
      <div className="img-section">
        <div className="img-1">
          <img src="/LetsTalk_1.png" style={{ zIndex: 50 }} alt="" />
        </div>
        <div className="img-2">
          <img src="/Robo.png" alt="" />
        </div>
      </div>
      <div className="form_tag">
        <form action="">
          <p>
            <b>You can find me</b> in my studio if you want to take a look at my
            sculptures, address is via sacra 69, Toulouse, France.
          </p>
          <div className="input_group">
            <label htmlFor="">Name*</label>
            <input type="text" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Email Address*</label>
            <input type="text" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Message*</label>
            <textarea rows={4} name="" id=""></textarea>
          </div>
        </form>
        <button className="">
          Let's Talk <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default LetsTalk;
