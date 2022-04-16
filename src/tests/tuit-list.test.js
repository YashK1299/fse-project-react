import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";

const MOCKED_TUITS = [
  { tuit: "alice's tuit", postedOn: 'March 187 2022', postedBy: 'alice', _id: '1' },
  { tuit: "bob's tuit", postedOn: 'March 18, 2022', postedBy: 'bob', _id: '2' },
  { tuit: "charlie's tuit", postedOn: 'March 19, 2022', postedBy: 'charlie', _id: '3' }
];

test('tuit list renders static tuit array', () => {
  render(
    <HashRouter>
      <Tuits tuits={MOCKED_TUITS}/>
    </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  const tuits = await findAllTuits();
  render(
    <HashRouter>
      <Tuits tuits={tuits}/>
    </HashRouter>);

  // Verifying number of occurances of text SpaceX
  const tuitArray = screen.getAllByText(/SpaceX/i);
  expect(tuitArray.length).toBeGreaterThanOrEqual(1);

  const linkElement = screen.getByText(/SPACEX/i);
  expect(linkElement).toBeInTheDocument();
});
