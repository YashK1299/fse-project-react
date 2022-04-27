import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    withCredentials: true
});

export const findTuitsBookmarkedByMe = (userId) =>
    api.get(`${BASE_URL}/api/users/${userId}/bookmarks`)
        .then(response => response.data);

export const bookmarkTuit = (userId, tuitId) => 
    api.post(`${BASE_URL}/api/users/${userId}/bookmarks/${tuitId}`)


export const unbookmarkTuit = (userId, tuitId) => 
    api.delete(`${BASE_URL}/api/users/${userId}/unbookmarks/${tuitId}`)


const service = {
    findTuitsBookmarkedByMe,
    bookmarkTuit,
    unbookmarkTuit
}

export default service;