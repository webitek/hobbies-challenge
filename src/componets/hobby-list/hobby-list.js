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
              <span className="link" onClick={() => handleDeleteHobby(id)}>Delete</span>
            </li>
          )
        })
      }
    </ul>
  )
};

export default HobbyList
