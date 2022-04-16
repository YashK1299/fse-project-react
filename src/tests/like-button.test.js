/**
 * @file Implement unit tests for like button.
 */
 import TuitStats from "../components/tuits/tuit-stats";
 import { act } from 'react-dom/test-utils';
 import {screen, render, fireEvent, waitFor} from "@testing-library/react";
 import {HashRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import React from 'react';
import '@testing-library/jest-dom';

const BASE_URL = "https://fse-node-a4-app.herokuapp.com"
 const USERS_API = `${BASE_URL}/api/users`;
 const TUITS_API = `${BASE_URL}/api/tuits`;
 console.error = () => {};
 // mock axios with the create
 // const mockAxios = jest.genMockFromModule('axios')
 // mockAxios.create = jest.fn(() => mockAxios)
     //
     // () =>
     // Promise.resolve({ data: false }));

 const MOCKED_USER = {username: "alice", _id: "123"};

 const MOCKED_TUIT =
     {tuit: "alice's tuit", postBy: "654", _id: "5678", stats: {likes: 10, dislikes: 5}};

 let dislikeTuitMock = jest.fn();
 let likeTuitMock = jest.fn();

 test('tuit stats renders like button', async() => {
     await act( async () => render(
         <HashRouter>
             <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitMock} dislikeTuit={dislikeTuitMock}/>
         </HashRouter>
     ));

     const likeButton = screen.getByTestId('test-likeButton');
     expect(likeButton).toBeInTheDocument();
 })

 test('tuit stats renders like stats', async() => {

     await act( async () => render(
         <HashRouter>
             <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitMock} dislikeTuit={dislikeTuitMock}/>
         </HashRouter>
     ));

     const likeStat = screen.getByText(/5/i);
     expect(likeStat).toBeInTheDocument();
 })

 test('click like button will trigger likeTuitMock function', async() => {
     await act( async () => render(
         <HashRouter>
             <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitMock} dislikeTuit={dislikeTuitMock}/>
         </HashRouter>
     ));

     const likeButton = screen.getByTestId('test-likeButton');
     await fireEvent.click(likeButton);
     expect(likeTuitMock).toHaveBeenCalledTimes(1);
     expect(screen.getByText(MOCKED_TUIT.stats.likes)).toBeInTheDocument();
 })