const getOnlyHobbies = (users) => {
  return users.map(({id, hobbies}) => {
    return {
      userId: id,
      userHobbies: hobbies,
    }
  })
}
const activateHobbiesByUser = ({hobbyList}, userId) => {
  const {hobbies} = hobbyList
  const activatedHobbyList = hobbies.find(item => item.userId === userId)
  if(activatedHobbyList) {
    return {
      ...hobbyList,
    }
  }
  return {
    ...hobbyList,
    hobbies: [
      ...hobbies,
      {
        userId,
        userHobbies: []
      }
    ]
  }
}
const updateHobby = (state, {activeUser, hobby}) => {
  const {hobbyList: {hobbies}} = state;
  if(hobby.id) {
    // delete
    const idx = hobbies.findIndex(item => item.userId === activeUser.id)
    return hobbies.map((item, i) => {
      if(i === idx) {
        return {
          ...item,
          userHobbies: item.userHobbies.filter(item => item.id !== hobby.id)
        }
      }
      return {
        ...item
      }
    })
  }
  if(hobby.title) {
    //add
    return hobbies.map(item => {
      if(item.userId === activeUser.id) {
        const {userHobbies} = item
        const lastIndex = userHobbies[userHobbies.length-1] ? userHobbies[userHobbies.length-1].id : 0
        const newUserHobbyList = [
          ...userHobbies,
          {id: lastIndex+1, ...hobby}
        ]
        return {
          ...item,
          userHobbies: newUserHobbyList
        }
      }
      return {
        ...item,
      }
    })
  }
  return [
    ...hobbies,
  ];
}


const updateHobbyList = (state, action) => {
  if(state === undefined) {
    return {
      hobbies: [],
      activeUser: null,
      error: null,
    }
  }
  switch (action.type) {
    case 'ACTIVATE_HOBBIES_BY_USER':
      return activateHobbiesByUser(state, action.payload)
    case 'HOBBY_LOADED':
      return {
        hobbies: getOnlyHobbies(action.payload),
        error: null,
      };
    case 'HOBBY_ADDED':
      return {
        hobbies: updateHobby(state, action.payload),
        error: null,
      };
    case 'HOBBY_REMOVED':
      return {
        hobbies: updateHobby(state, action.payload),
        error: null,
      };
    default:
      return state.hobbyList
  }
}
export default updateHobbyList