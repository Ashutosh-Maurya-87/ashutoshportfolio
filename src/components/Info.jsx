import React from "react";
import "./Info.css";

const Info = (props) => {
  //console.log("props value are", props.text);
  return (
    <>
      <div className="info">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">About:-</h5>
            <p className="card-text">
              <h4>
                Myself {props.name}. <br />I have Completed {props.education}{" "}
                degree From Dr. Ram Manohar Lohia Awadh University Ayodhya Uttar
                Pradesh.
                <br />
              </h4>
            </p>
          </div>
        </div>
      </div>
      <h2>
        Education:-
        <li>10th</li>
        <li>12th</li>
        <li>BCA (Bachelor of Computer Application)</li>
      </h2>
    </>
  );
};
export default Info;
