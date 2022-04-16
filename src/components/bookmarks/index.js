/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import BookmarksService from "../../services/bookmarks-service";
import {useNavigate} from "react-router-dom";
import * as AuthService from "../../services/auth-service";

function Bookmarks() {
  let initialTuits = [];
  const [bookmarkedTuits, setBookmarkedTuits] = useState(initialTuits);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const likeTuit = () => {
    console.log('Like Tuit logged');
  }

  const dislikeTuit = () => {
    console.log('Dislike Tuit logged');
  }
  const dummyTuits = [{
    _id: 1,
    postedBy: {
      username: 'Alice'
    },
    tuit: 'Alice Rulz 😁',
    postedOn: new Date('2021-12-01'),
    stats: {
      likes: 20,
      dislikes: 40
    }
  },
  {
    _id: 2,
    postedBy: {
      username: 'Bob'
    },
    postedOn: new Date('2022-02-01'),
    tuit: 'It kinda makes sense that the target audience for fidget spinners lost interest in them so quickly.',
    stats: {
      likes: 40,
      dislikes: 10
    }
  },
  {
    _id: 3,
    postedBy: {
      username: 'Charlie'
    },
    postedOn: new Date('2021-09-01'),
    tuit: 'The object of golf is to play the least amount of golf. 🤣',
    stats: {
      likes: 40,
      dislikes: 10
    }
  }
  ];

  useEffect(async () => {
    try {
      const user = await AuthService.profile();
      setProfile(user);
    } catch (e) {
      navigate('/login');
    }
  }, []);

  useEffect(async () => {
    if(profile){
      BookmarksService.findTuitsBookmarkedByMe("me")
      .then(tuits => {
        if (tuits) {
          setBookmarkedTuits(tuits);
        } else {
          setBookmarkedTuits(dummyTuits);
        }
      }).catch(err => {
        console.log("error fetching tuits for user. Reverting to dummy tuits for now.")
        setBookmarkedTuits(dummyTuits);
      });
    } 
  }, []);
  return (
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Bookmarks</h4>
      </div>
      <div className="ttr-bookmarks">
        {profile && <Tuits tuits={bookmarkedTuits} likeTuit={likeTuit} dislikeTuit={dislikeTuit} />}
      </div>
    </div>
  );
}
export default Bookmarks;