//Main Page
import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import List from "../List/List";

const Gymdata = () => {
  const [excercises, setExcercises] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    //fake data Load
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExcercises(data));
  }, []);
  const handleAddToList = (exercise) => {
    console.log(exercise);
    const newList = [...list, exercise];
    setList(newList);
  };
  return (
    <div className="container">
      <div className="row gx-3">
        <div className="col-lg-9 col-md-6 col-sm-12 ">
          <div>
            <h3 className="mb-3">Select Your Daily Exercise</h3>
            <div className="row g-3">
              {excercises.map((exercise) => (
                <Exercise
                  key={exercise.id}
                  exercise={exercise}
                  handleAddToList={handleAddToList}
                ></Exercise>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 rounded-2 ">
          <List list={list}></List>
        </div>
      </div>
    </div>
  );
};

export default Gymdata;
