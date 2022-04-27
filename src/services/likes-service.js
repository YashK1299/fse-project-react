import axios from "axios";

const BASE_URL = process.env.NODE_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({
 withCredentials: true
});

export const userTogglesTuitLikes = (uid, tid) =>
   api.put(`${USERS_API}/${uid}/likes/${tid}`)
       .then(response => response.data);

export const findAllTuitsLikedByUser = (userId) =>
   api.get(`${USERS_API}/${userId}/likes`)
       .then(response => response.data);
   
export const findAllUsersThatLikedTuit = (tid) =>
   api.get(`${TUITS_API}/${tid}/likes`)
       .then(response => response.data);