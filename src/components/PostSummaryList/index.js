import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem"

const PostSummaryList = () => {
  return (
      <ul className="list-group">
        {
          posts.map(item => {
            return (<PostSummaryItem post={item}/>);
          })
        }
      </ul>
  );
}

export default PostSummaryList;