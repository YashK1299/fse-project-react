
import React from "react";
import PostSummaryList from "../PostSummaryList";
const Entertainment = () => {
  return (<div>
        <div className="card wd-card-top mt-1">
          <img src="../images/Coachella.jpeg"
               className="wd-card-top-image" alt=""></img>
          <div className="card-body wd-bottom-left">
            <p className="card-text"></p>
            <h3 className="card-title">Coachella 2022 Day 1 is underway</h3>
          </div>
        </div>
        {PostSummaryList}
      </div>
  );
}

export default Entertainment;