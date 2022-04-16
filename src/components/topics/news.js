
import React from "react";
import PostSummaryList from "../PostSummaryList";
const News = () => {
  return (<div>
        <div className="card wd-card-top mt-1">
          <img src="../images/Ukraine.jpeg"
               className="wd-card-top-image" alt=""></img>
          <div className="card-body wd-bottom-left">
            <p className="card-text"></p>
            <h3 className="card-title">War in Ukraine escalates</h3>
          </div>
        </div>
        {PostSummaryList}
      </div>
  );
}

export default News;