import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = ({active = 'explore'}) => {
  return (
      <div>
        <div className="list-group">
          <Link to="/"
                className="list-group-item list-group-item-action py-2 ripple">
            <i className="fab fa-twitter fa-fw me-1"></i>
          </Link>


          <Link to="/a8/twitter/home"  className={`list-group-item list-group-item-action py-2 ripple ${active === 'home'? 'active': ''}`}>
            <i aria-hidden="true"
               className="fa fa-home fa-fw me-1 "></i><span
              className="d-none d-xl-inline-block">Home</span>
          </Link>
          <Link to="/a8/twitter/explore" className={`list-group-item list-group-item-action py-2 ripple ${active === 'explore'? 'active': ''}`}
             href= "../ExploreScreen/explore.html">
          <i className="fa fa-hashtag fa-fw me-1 " aria-hidden="true"></i><span
            className="d-none d-xl-inline-block">Explore</span>
        </Link>
        <a className="list-group-item list-group-item-action py-2 ripple"
           href="notifications.html"
        ><i aria-hidden="true"
            className="fa fa-bell fa-fw me-1"></i><span
            className="d-none d-xl-inline-block">Notifications</span></a
        >
        <a className="list-group-item list-group-item-action py-2 ripple"
           href="messages.html"
        ><i aria-hidden="true"
            className="fa fa-envelope  fa-fw me-1"></i><span
            className="d-none d-xl-inline-block">Messages</span></a
        >
        <a className="list-group-item list-group-item-action py-2 ripple"
           href="bookmarks.html">
          <i aria-hidden="true" className="fa fa-bookmark  fa-fw me-1"></i><span
            className="d-none d-xl-inline-block">Bookmarks</span>
        </a>
        <a className="list-group-item list-group-item-action py-2 ripple"
           href="lists.html"
        ><i aria-hidden="true"
            className="fa fa-list-ul fa-fw me-1"></i><span
            className="d-none d-xl-inline-block">Lists</span></a
        >
          <Link to="/a8/twitter/profile"  className={`list-group-item list-group-item-action py-2 ripple ${active === 'profile'? 'active': ''}`}>
            <i aria-hidden="true"
               className="fa fa-user fa-fw me-1"></i><span
              className="d-none d-xl-inline-block">Profile</span>
          </Link>
        <a className="list-group-item list-group-item-action py-2 ripple"
           href="#more"
        ><span className="fa fa-stack" style={{"position" : "relative", "left": "-10px"}} >
                            <i className="fas fa-circle fa-stack-1x"></i>
                            <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                        </span>
          <span className="d-none d-xl-inline-block wd-more-icon">More</span></a
        >
        <div className="text-center mt-4">
          <button className="btn btn-primary rounded-pill wd-width">
            Tweet
          </button>
        </div>
      </div>
</div>);
}
export default NavigationSidebar;
