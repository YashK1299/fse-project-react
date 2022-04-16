import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";
  
const MOCKED_TUITS = [
    { tuit: "alice's tuit", postedOn: 'March 187 2022', postedBy: 'alice', _id: '1' },
    { tuit: "bob's tuit", postedOn: 'March 18, 2022', postedBy: 'bob', _id: '2' },
    { tuit: "charlie's tuit", postedOn: 'March 19, 2022', postedBy: 'charlie', _id: '3' }
  ];

jest.mock('axios');

test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(() =>
    Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
  const response = await findAllTuits();
  const tuits = response.tuits;
  
  render(
    <HashRouter>
      <Tuits tuits={tuits}/>
    </HashRouter>);
  
  const tuit = screen.getByText(/alice's tuit/i);
  expect(tuit).toBeInTheDocument();
  });