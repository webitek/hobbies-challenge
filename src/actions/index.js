const usersLoaded = (newBooks) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: newBooks
  }
}
const usersRequested = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}
const usersError = (error) => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
}
const userAdded = (error) => {
  return {
    type: 'USER_ADDED',
    payload: error
  }
}

const fetchUsers = (usersService) => () => (dispatch) => {
  dispatch(usersRequested())
  usersService.getUsers()
    .then((data) => {
      dispatch(usersLoaded(data))
    })
    .catch(((error) => {
      dispatch(usersError(error))
    }))
}

export {
  fetchUsers,
  userAdded,
}