import Bookmarks from "../components/bookmarks"
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import 'regenerator-runtime/runtime';
import React from 'react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

const MOCKED_USER_PROFILE = { username: "a", _id: "234" };
const MOCKED_TUITS =
    [{ tuit: "tuit1", postBy: "user1", _id: "id1", stats: { likes: 25, dislikes: 6 } }];

const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);


test('Renders bookmarked tuits', async () => {

    mockAxios.get.mockImplementation((url) => {
        if (url.contains('/api/auth/profile')) {
            return Promise.resolve({ data: MOCKED_USER_PROFILE })
        } else if (url.contains("/me/bookmarks")) {
            return Promise.resolve({ data: MOCKED_TUITS })
        }
    });
    await act( async () => render(
        <HashRouter>
            <Bookmarks />
        </HashRouter>
    ));

    const tuits = screen.getAllByText(/Bookmarks/i);
    expect(tuits[0]).toBeInTheDocument();
})