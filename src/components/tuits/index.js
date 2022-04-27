import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as dislikesService from "../../services/dislikes-service";
import * as bookmarkService from "../../services/bookmarks-service";
import * as service from "../../services/tuits-service";
const Tuits = ({tuits = [], deleteTuit,
                refreshTuits, inBookmarksPage = false}) => {
  if(!deleteTuit) {
    deleteTuit = (tid) =>
      service.deleteTuit(tid)
      .then(refreshTuits)
      .catch(e => alert(e))
  }
  const likeTuit = (tuit) =>
    likesService
      .userTogglesTuitLikes("me", tuit._id)
      .then(refreshTuits)
      .catch(e => alert(e))

  const dislikeTuit = (tuit) =>
    dislikesService
      .userTogglesTuitDislikes("me", tuit._id)
      .then(refreshTuits)
      .catch(e => alert(e))

  const bookmarkTuit = (tuit) => 
      bookmarkService.bookmarkTuit("me", tuit._id)
      .then(refreshTuits)
      .catch(e => alert(e));
  
  const unbookmarkTuit = (tuit) => 
      bookmarkService.unbookmarkTuit("me", tuit._id)
      .then(refreshTuits)
      .catch(e => alert(e));

  return (
    <div>
      <ul>
        {
          tuits.map(tuit =>
            <Tuit key={tuit._id}
              deleteTuit={deleteTuit}
              likeTuit={likeTuit}
              dislikeTuit={dislikeTuit}
              bookmarkTuit={bookmarkTuit}
              tuit={tuit}
              inBookmarksPage={inBookmarksPage}
              unbookmarkTuit={unbookmarkTuit}/>)
        }
      </ul>
    </div>
  );
}

export default Tuits;