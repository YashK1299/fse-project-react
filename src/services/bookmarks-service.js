import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    withCredentials: true
});

export const findTuitsBookmarkedByMe = (userId) =>
    api.get(`${BASE_URL}/api/users/${userId}/bookmarks`)
        .then(response => response.data);

export const bookmarkTuit = (userId, tuitId) => {
    api.post(`${BASE_URL}/api/users/${userId}/bookmarks/${tuitId}`)
    .then(response => response.data);
}

export const unbookmarkTuit = (userId, tuitId) => {
    api.post(`${BASE_URL}/api/users/${userId}/unbookmarks/${tuitId}`)
    .then(response => response?.data);
}

const service = {
    findTuitsBookmarkedByMe,
    bookmarkTuit,
    unbookmarkTuit
}

export default service;