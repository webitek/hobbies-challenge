import { put, takeLatest, all } from 'redux-saga/effects';
const data = [
  {
    id: 1,
    name: 'John',
    hobbies: [
      {
        id: 1,
        title: 'Stamp\'s Collecting',
        passion: 'High',
        year: '1999',
      }
    ],
  },
  {
    id: 2,
    name: 'Peter',
    hobbies: [
      {
        id: 1,
        title: 'Reading Books',
        passion: 'Low',
        year: '2007',
      },
      {
        id: 2,
        title: 'Puzzle',
        passion: 'Very-High',
        year: '2007',
      },
    ],
  },
]
function* fetchUsers() {
  const users = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 700)
  })
  yield put({ type: "FETCH_USERS_SUCCESS", payload: users, });
  yield put({ type: "HOBBY_LOADED", payload: users, });
}
function* actionWatcher() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsers)
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}