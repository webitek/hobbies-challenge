const usersLoaded = (newUser) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: newUser
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
const userAdded = (newUser) => {
  return {
    type: 'USER_ADDED',
    payload: newUser
  }
}
const userActivated = (userId) => {
  return {
    type: 'USER_ACTIVATED',
    payload: userId
  }
}
const hobbiesLoaded = (payload) => {
  return {
    type: 'HOBBY_LOADED',
    payload: payload
  }
}
const hobbyAdded = (payload) => {
  return {
    type: 'HOBBY_ADDED',
    payload
  }
}
const hobbyRemoved = (payload) => {
  return {
    type: 'HOBBY_REMOVED',
    payload
  }
}
const activeteHobbiesByUser = (userId) => {
  return {
    type: 'ACTIVATE_HOBBIES_BY_USER',
    payload: userId
  }
}

/*const fetchUsers = (usersService) => () => (dispatch) => {
  dispatch(usersRequested())
  usersService.getUsers()
    .then((data) => {
      dispatch(usersLoaded(data))
      dispatch(hobbiesLoaded(data))
    })
    .catch(((error) => {
      dispatch(usersError(error))
    }))
}*/

export {
  usersRequested,
  userAdded,
  hobbyAdded,
  hobbyRemoved,
  userActivated,
  activeteHobbiesByUser,
}