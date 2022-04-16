import React from "react";
import "../../images/SpaceXStarship.jpeg"
import PostSummaryList from "../PostSummaryList";
import {Link, Routes, Route, HashRouter} from "react-router-dom";
import Home from "../home";
import ForYou from "../topics/foryou";
import News from "../topics/news";
import Sports from "../topics/sports"
import Entertainment from "../topics/entertainment"
import {Login} from "../profile/login";
import Signup from "../profile/signup";
import Explore from "./ExploreScreen";
import Notifications from "../notifications";
import Messages from "../messages";
import Bookmarks from "../bookmarks";
import Lists from "../lists";
import Profile from "../profile";
import EditProfile from "../profile/edit-profile";
import More from "../more";
import TuitScreen from "../tuits/tuit-screen";
import Trending from "../topics/trending";

const ExploreComponent = () => {
  return (<>
        <div className="container wd-left-sidebar-container">
          <div>
            <div className="row wd-top-bottom-padding">

              <form>
                <div className="row wd-search-row">
                  <i className="fas fa-search wd-icon-search"></i>
                  <div className="col-11">
                    <input type="text" id="wd-corners-round"
                           placeholder="Search Twitter"/>
                  </div>
                  <div className="col-1"><a href="explore-settings.html"><i
                      className="fas fa-cog fa-lg wd-gear-icon"></i></a></div>
                </div>
              </form>
            </div>
            <div>
              <ul className="nav mb-2 nav-tabs">

                <li className="nav-item">

                  <Link to="/explore/for-you"><a className="nav-link active" href="/explore/for-you">For You</a></Link>
                </li>

                <li className="nav-item">
                  <Link to="/explore/trending"><a className="nav-link" href="/explore/trending">Trending</a></Link>

                </li>
                <li className="nav-item">
                  <Link to="/explore/news"> <a className="nav-link" href="/explore/news">News</a></Link>

                </li>
                <li className="nav-item">
                  <Link to="/explore/sports"> <a className="nav-link" href="/explore/sports">Sports</a></Link>

                </li>
                <li className="nav-item d-sm-none d-md-block">
                  <Link to="/explore/entertainment"> <a className="nav-link" href="/explore/entertainment">Entertainment</a></Link>

                </li>
              </ul>
            </div>
            {/*<HashRouter>*/}

              <Routes>
                <Route path="/for-you" element={<ForYou/>}/>
                <Route path="/trending" element={<Trending/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/sports" element={<Sports/>}/>
                <Route path="/entertainment" element={<Entertainment/>}/>
              </Routes>
            {/*</HashRouter>*/}


            {/*<div className="card wd-card-top mt-1">*/}
            {/*  <img src="../images/SpaceXStarship.jpeg"*/}
            {/*       className="wd-card-top-image" alt=""></img>*/}
            {/*  <div className="card-body wd-bottom-left">*/}
            {/*    <p className="card-text"></p>*/}
            {/*    <h3 className="card-title">SpaceX's Starship</h3>*/}
            {/*  </div>*/}
            {/*</div>*/}


            {PostSummaryList()}
          </div>
        </div>
      </>
  );
}
export default ExploreComponent;
