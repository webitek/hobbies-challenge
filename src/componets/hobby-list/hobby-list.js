import React  from 'react';

const HobbyList = ({userHobbies, handleDeleteHobby}) => {
  if(!userHobbies.length) {
    return (
      <p>Haven't hobbies yet</p>
    )
  }
  return (
    <ul>
      {
        userHobbies.map(({title, id}) => {
          return (
            <li key={id}>
              {title}
              <button onClick={() => handleDeleteHobby(id)}>Delete</button>
            </li>
          )
        })
      }
    </ul>
  )
};

export default HobbyList
