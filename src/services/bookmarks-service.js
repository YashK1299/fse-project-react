import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    withCredentials: true
});

export const findTuitsBookmarkedByMe = (userId) =>
    axios.get(`${BASE_URL}/${userId}/bookmarks`,)
        .then(response => response.data);

const service = {
    findTuitsBookmarkedByMe
}

export default service;