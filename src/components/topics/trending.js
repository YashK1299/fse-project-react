
import React from "react";
import PostSummaryList from "../PostSummaryList";
const Trending = () => {
  return (<div>
        <div className="card wd-card-top mt-1">
          <img src="../images/SpaceXStarship.jpeg"
               className="wd-card-top-image" alt=""></img>
          <div className="card-body wd-bottom-left">
            <p className="card-text"></p>
            <h3 className="card-title">SpaceX's Starship</h3>
          </div>
        </div>
        {PostSummaryList}
      </div>
  );
}

export default Trending;