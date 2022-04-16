import { act } from 'react-dom/test-utils';
import Profile from "../components/profile/index"
import MyLikes from "../components/profile/my-likes"
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import React from 'react';
import '@testing-library/jest-dom';

const MOCKED_USER = {username: "bob", _id: "234"};
const MOCKED_TUIT =
    [{tuit: "alice's tuit", postBy: "234", _id: "2341", stats: {likes: 25, dislikes: 6}}];

const mockAxios = jest.genMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)

test('renders likes tab on profile', async() => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({ data: MOCKED_USER }));

    await act( async () => render(
        <HashRouter>
            <Profile />
        </HashRouter>
    ));

    const likeTab = screen.getAllByText(/Likes/i);
    console.log(likeTab);
    expect(likeTab[0]).toBeInTheDocument();
})