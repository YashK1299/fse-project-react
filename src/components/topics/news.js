
import React, {useEffect, useState} from "react";
import PostSummaryList from "../PostSummaryList";
import Tuits from "../tuits";

const BASE_URL = process.env.REACT_APP_BASE_URL
const EXPLORE_URL = `${BASE_URL}/api/topics/`
const TOPIC_URL = `${BASE_URL}/api/topics/findtopicid/News`
const News = () => {

    var [posts, setPosts] = useState([]);
    var [topicId, setTopicId] = useState('');

    const likeTuit = () => {
        console.log('Like Tuit logged');
    }

    const dislikeTuit = () => {
        console.log('Dislike Tuit logged');
    }


    useEffect(() =>
        fetch(TOPIC_URL)
            .then(response => response.json())
            .then(topics => setTopicId(topics[0]._id)).then(),[]
    );

    useEffect(() =>
        fetch(EXPLORE_URL+topicId+"/tuits")
            .then(response => response.json())
            .then(tuits => {
                var tuitdata = []
                for(var tuit of tuits){
                    tuitdata.push(tuit.tuit)
                }
                console.log(tuitdata);
                console.log(tuits);
                setPosts(tuitdata)
            }),[topicId]
    );


    return (<div>
        <div className="card wd-card-top mt-1">
          <img src="../images/Ukraine.jpeg"
               className="wd-card-top-image" alt=""></img>
          <div className="card-body wd-bottom-left">
            <p className="card-text"></p>
            <h3 className="card-title">War in Ukraine escalates</h3>
          </div>
        </div>
            <Tuits tuits={posts} likeTuit={likeTuit} dislikeTuit={dislikeTuit} />
      </div>
  );
}

export default News;