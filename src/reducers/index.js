import updateUserList from './user-list'

const reducer = (state, action) => {
  return {
    userList: updateUserList(state, action),
  }
}

export default reducer;