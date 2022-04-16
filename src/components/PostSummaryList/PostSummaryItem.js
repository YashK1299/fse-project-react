import React from "react";

const PostSummaryItem = ({
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../../images/ReactLogo.png"
      }
    }
) => {
  return (
      <li className="list-group-item wd-explore-tweet-list d-flex justify-content-between align-items-center">
        <div
            className="wd-suggested-post wd-post-flex wd-top-bottom-padding wd-left-right-padding">
          <div className="wd-post-textarea">

            <span className="wd-topic">{post.topic} </span>
            <div>
              <span className="wd-wtf-username">{post.userName} <i
                  className="fas fa-check-circle"></i></span> <span
                className="wd-topic"> - {post.time} </span></div>
            <span className="wd-title">{post.title}</span>
          </div>
          <div className="wd-post-image">
            <img src={post.image} className="wd-post-img" alt={""}/>
          </div>
        </div>
      </li>
  );
}
export default PostSummaryItem;