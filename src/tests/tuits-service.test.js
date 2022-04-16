import {
  createUser,
  deleteUsersByUsername
} from "../services/users-service";
import { createTuit, 
  deleteTuit,
  findTuitById,
  findTuitByUser
} from "../services/tuits-service";

describe('can create tuit with REST API', () => {
  // sample user to insert

  let newTuit;
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };
  const testTuit = {
    tuit: 'First tuit',
    postedOn: "2022-03-15T05:00:00.000Z"
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(async () => {
    // remove any data we created
    await deleteTuit(newTuit._id);
    return await deleteUsersByUsername(ripley.username);
  })

  test('can insert new users with REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(ripley);
    // insert new tuit in the database
    newTuit = await createTuit(newUser._id, testTuit);

    // verify inserted user's properties match parameter user
    expect(newTuit.tuit).toEqual(testTuit.tuit);
    expect(newTuit.postedOn).toEqual(testTuit.postedOn);
    expect(newTuit.postedBy).toEqual(newUser._id);
  });
});

describe('can delete tuit wtih REST API', () => {
  // delete a tuit. Assumes tuit already exists
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };
  const testTuit = {
    tuit: 'First tuit',
    postedOn: "2022-03-15T05:00:00.000Z"
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(ripley.username);
  })

  test('can delete tuit wtih REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(ripley);
    // Insert a new tuit in the database
    const newTuit = await createTuit(newUser._id, testTuit);
    // Delete the inserted tuit
    const status = await deleteTuit(newTuit._id);

    // verify we deleted at least one tuit
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // find a tuit using the primary key. Assumes tuit already exists

  let newTuit;
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };
  const testTuit = {
    tuit: 'First tuit',
    postedOn: "2022-03-15T05:00:00.000Z"
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(async () => {
    // remove any data we created
    await deleteTuit(newTuit._id);
    return await deleteUsersByUsername(ripley.username);
  })

  test('can retrieve a tuit by their primary key with REST API', async () => {
    // insert new tuits and user in the database
    const newUser = await createUser(ripley);
    newTuit = await createTuit(newUser._id, testTuit);
    // find the newly added tuit in the database
    const tuitFound = await findTuitById(newTuit._id);

    // verify inserted tuit's properties match parameter tuit
    expect(newTuit.tuit).toEqual(testTuit.tuit);
    expect(newTuit.postedOn).toEqual(testTuit.postedOn);
    expect(newTuit.postedBy).toEqual(newUser._id);

    // verify we found the tuit that matches the one we added to the database
    expect(tuitFound._id).toEqual(newTuit._id);
    expect(tuitFound.tuit).toEqual(newTuit.tuit);
    expect(tuitFound.postedBy).toEqual(newUser);
  });
});

describe('can retrieve all tuits with REST API', () => {
  // find all tuits posted by a user. Assumes tuits already exists
  
  let newTuit1;
  let newTuit2;
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };
  const testTuit1 = {
    tuit: 'First tuit',
    postedOn: "2022-03-15T05:00:00.000Z"
  };

  const testTuit2 = {
    tuit: 'Second tuit',
    postedOn: "2022-03-16T05:00:00.000Z"
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(async () => {
    // remove any data we created
    await deleteTuit(newTuit1._id);
    await deleteTuit(newTuit2._id);
    return await deleteUsersByUsername(ripley.username);
  })

  test('can retrieve all tuits with REST API', async () => {
    // insert new tuits and user in the database
    const newUser = await createUser(ripley);
    newTuit1 = await createTuit(newUser._id, testTuit1);
    newTuit2 = await createTuit(newUser._id, testTuit2);
    // Find newly inserted tuits in the database
    const tuitsFound = await findTuitByUser(newUser._id);

    // there should be a minimum number of tuits
    expect(tuitsFound.length).toBeGreaterThanOrEqual(2);

    // verify we found all tuits matching the ones added
    expect(tuitsFound[0]._id).toEqual(newTuit1._id);
    expect(tuitsFound[0].tuit).toEqual(newTuit1.tuit);
    expect(tuitsFound[0].postedBy).toEqual(newUser._id);
    expect(tuitsFound[1]._id).toEqual(newTuit2._id);
    expect(tuitsFound[1].tuit).toEqual(newTuit2.tuit);
    expect(tuitsFound[1].postedBy).toEqual(newUser._id);
  });
});