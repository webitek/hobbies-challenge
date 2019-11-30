const updateUsers = (state, userName, quantity) => {
  const {userList: {users}} = state

  let newUser = {
    id: users[users.length-1].id + 1,
    name: userName
  }

  return {
    ...state.userList,
    users: [
      ...users,
      newUser,
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
    case 'FETCH_USERS_REQUEST':
      return {
        users: [],
        loading: true,
        error: null,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        users: action.payload,
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
      return updateUsers(state, action.payload, 1)
    default:
      return state.userList
  }
}
export default updateUserList