import React from "react";

import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
  return (

      <ul className="list-group">

        {who.map(item => {
          return (<WhoToFollowListItem who={item}/>);
        })}
      </ul>);
}

export default WhoToFollowList;