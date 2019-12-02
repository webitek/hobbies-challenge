const updateUsers = (state, userName) => {
  const {userList: {users}} = state

  let newUser = {
    id: users[users.length-1].id + 1,
    name: userName,
    active: false
  }

  return {
    ...state.userList,
    users: [
      ...users,
      newUser,
    ]
  }
}
const activateUser = (state, userId ) => {
  const {userList: {users}} = state
  const newUserArr = users.map((item) => {
    return {
      ...item,
      active: item.id === userId
    }
  })
  return {
    ...state.userList,
    users: [
      ...newUserArr,
    ]
  }
}

const updateUserList = (state, action) => {
  if(state === undefined) {
    return {
      users: [],
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case 'USER_ACTIVATED':
      return activateUser(state, action.payload)
    case 'FETCH_USERS_REQUEST':
      return {
        users: [],
        loading: true,
        error: null,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        users: action.payload.map(({id, name}, i) => {
          return {
            id,
            name,
            // TODO set false
            active: Boolean(i)
          }
        }),
        loading: false,
        error: null,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        users: [],
        loading: false,
        error: action.payload
      };
    case 'USER_ADDED':
      return updateUsers(state, action.payload)
    default:
      return state.userList
  }
}
export default updateUserList