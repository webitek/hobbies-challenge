import updateUserList from './user-list'
import updateHobbyList from './hobby-list'

const reducer = (state, action) => {
  return {
    userList: updateUserList(state, action),
    hobbyList: updateHobbyList(state, action),
  }
}

export default reducer;