import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <>
      <div className="info">
        <h3>this is info component</h3>
        <div
          className="card"
          style={{ width: "18rem", backgroundColor: "red" }}
        >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            Go somewhere
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
