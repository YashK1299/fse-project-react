import React, { useEffect, useState } from "react";
import Tuits from "../tuits";

function Bookmarks() {
  let initialTuits = [];
  const [bookmarkedTuits, setBookmarkedTuits] = useState(initialTuits);
  const likeTuit = () => {
    console.log('Like Tuit logged');
  }

  const dislikeTuit = () => {
    console.log('Dislike Tuit logged');
  }
  useEffect(() => {
    const dummyTuits = [{
      _id: 1,
      postedBy: {
        username: 'Alice'
      },
      tuit: 'Alice Rulz 😁',
      postedOn: new Date('2021-01-01'),
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
      postedOn: new Date('2022-01-01'),
      tuit: 'It kinda makes sense that the target audience for fidget spinners lost interest in them so quickly.',
      stats: {
        likes: 40,
        dislikes: 10
      }
    },
    {
      _id: 3,
      postedBy: {
        username: 'Sana'
      },
      postedOn: new Date('2020-01-01'),
      tuit: 'The object of golf is to play the least amount of golf. 🤣',
      stats: {
        likes: 40,
        dislikes: 10
      }
    }
    ];

    setBookmarkedTuits(dummyTuits)
  }, []);
  return (
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Bookmarks</h4>
      </div>
      <div className="ttr-bookmarks">
        <Tuits tuits={bookmarkedTuits} likeTuit={likeTuit} dislikeTuit={dislikeTuit} />
      </div>
    </div>
  );
}
export default Bookmarks;