// page for show personal information and  calculation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import logo from "../../images/profile.ico";
import Toast from "../Toast/Toast";
import BreakTime from "../BreakTime/BreakTime";

const List = (props) => {
  const [click, setClick] = useState([]);
  const { list } = props;
  let totalTime = 0;
  for (const item of list) {
    totalTime = totalTime + item.time;

    console.log(totalTime);
  }
  const button =[10, 20, 30, 40, 50];
  const [button1, button2, button3, button4, button5] = button;
  
  
  const AddToDb = (button) => {
    setClick(button);
    localStorage.setItem('breakTime', button);
    const newClick = [...click, button];
     setClick(newClick);
        
  };


  return (
    <div>
      <div className="d-flex align-items-center mb-2 rounded-2">
        <div>
          <img
            src={logo}
            width="70"
            height="70"
            className="rounded-5 p-2"
            alt=""
          />
        </div>
        <div>
          <h5 className="pt-3">Md Arman Hossen</h5>
          <div className="d-flex align-items-space justify-content-evenly">
            <FontAwesomeIcon
              className="pt-1"
              icon={faLocation}
            ></FontAwesomeIcon>
            <p>Dhaka, Bangladeh</p>
          </div>
        </div>
      </div>

      <div className=" border p-3 mb-3 rounded-3 " style={{backgroundColor : '#E7F1FF'}}>
        <div className="d-flex justify-content-evenly ps-1">
          <div className="d-flex">
            <h3>85</h3>
            <p className="pt-2">
              <small>kg</small>
            </p>
          </div>
          <div>
            <h3>5' 11"</h3>
          </div>
          <div className="d-flex">
            <h3>23</h3>
            <p className="pt-2">
              <small>Yrs</small>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <div>
            <p>Weight</p>
          </div>
          <div>
            <p>Height</p>
          </div>
          <div>
            <p>Age</p>
          </div>
        </div>
      </div>
      <h4 className="mt-5 text-center">Add A Break </h4>

      <div className="d-flex justify-content-evenly">
        <button className="btn btn-light text-dark border rounded-circle p-3 " style={{backgroundColor : '#E7F1FF'}} onClick={() => AddToDb(button1)}>
          {button1}m
        </button>
        <button className="btn btn-light text-dark border rounded-circle p-3" style={{backgroundColor : '#E7F1FF'}} onClick={() => AddToDb(button2)}>
          {button2}m
        </button>
        <button className="btn btn-light text-dark border rounded-circle p-3" style={{backgroundColor : '#E7F1FF'}} onClick={() => AddToDb(button3)}>
          {button3}m
        </button>
        <button className="btn btn-light text-dark border rounded-circle p-3" style={{backgroundColor : '#E7F1FF'}} onClick={() => AddToDb(button4)}>
          {button4}m
        </button>
        <button className="btn btn-light text-dark border rounded-circle p-3" style={{backgroundColor : '#E7F1FF'}} onClick={() => AddToDb(button5)}>
          {button5}m
        </button>
      </div>

      <h4 className="mt-5 text-center">Exercise Details </h4>
      <h6 className=" border rounded-3 p-3" style={{backgroundColor : "#E7F1FF"}}>
        Exercise time: {totalTime}m
      </h6>
       
      <BreakTime click={click}></BreakTime>
      <div className="mt-5">
        <Toast></Toast>
      </div>
    </div>
  );
};

export default List;
