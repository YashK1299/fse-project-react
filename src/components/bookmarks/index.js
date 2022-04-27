/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import BookmarksService from "../../services/bookmarks-service";
import { useNavigate } from "react-router-dom";
import * as AuthService from "../../services/auth-service";

function Bookmarks() {
  let initialTuits = [];
  const [bookmarkedTuits, setBookmarkedTuits] = useState(initialTuits);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    try {
      const user = await AuthService.profile();
      setProfile(user);
    } catch (e) {
      navigate('/login');
    }
  }, []);
  const getTuits = () => {
    BookmarksService.findTuitsBookmarkedByMe("me")
      .then(bookmarks => {
        if (bookmarks) {
          const tuits = bookmarks.map(bookmarks => bookmarks.tuit)
          setBookmarkedTuits(tuits);
        }
      }).catch(err => {
        console.log("error fetching tuits for user. Reverting to dummy tuits for now.")
      });
  }
useEffect(async () => {
  if (profile) {
    getTuits();
  }
  }, []);
return (
  <div className="ttr-home">
    <div className="border border-bottom-0">
      <h4 className="fw-bold p-2">Bookmarks</h4>
    </div>
    <div className="ttr-bookmarks">
      {profile && <Tuits tuits={bookmarkedTuits} inBookmarksPage={true} refreshTuits={ getTuits} />}
    </div>
  </div>
);
}
export default Bookmarks;