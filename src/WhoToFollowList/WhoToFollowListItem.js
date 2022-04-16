import React from "react";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: '../../../../images/NasaLogo.png',
    userName: 'NASA',
    handle: 'NASA',
  }
}) => {
  return (
      <li className="list-group-item d-flex align-items-center">
        <img src={who.avatarIcon} alt="Avatar" className="wd-image-round"/>
        <div className="ms-1 wd-wtf-user-detail-div ps-1">
          <span className="wd-d-p-head mb-0">{who.userName} <i
              className="fas fa-check-circle"></i></span><br></br>
          <span className="wd-d-p-head mb-0">@{who.handle}</span>
        </div>
        <div className="col-sm-4 pe-1 wd-follow">
          <button type="submit"
                  className="btn btn-primary wd-follow rounded-pill">Follow
          </button>
        </div>
      </li>);
}
export default WhoToFollowListItem;
