import React from 'react';
import {List, EmptyList} from '../styles/hobby-list/style'

const HobbyList = ({userHobbies, handleDeleteHobby}) => {
  if (!userHobbies.length) {
    return (
      <EmptyList>
        <p className="title">Haven't hobbies yet</p>
        <p className="sub-title">Try to add a new hobby!</p>
      </EmptyList>
    )
  }
  return (
    <List className="hobby-list">
      {
        userHobbies.map(({title, id}) => {
          return (
            <li key={id}>
              {title}
              <button className="delete" onClick={() => handleDeleteHobby(id)}>
                <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6,3 L7,2 L9,2 L10,3 L12.5,3 C12.7761424,3 13,3.22385763 13,3.5 C13,3.77614237 12.7761424,4 12.5,4 L3.5,4 C3.22385763,4 3,3.77614237 3,3.5 C3,3.22385763 3.22385763,3 3.5,3 L6,3 Z M4,5 L12,5 L12,13 C12,13.5522847 11.5522847,14 11,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,5 Z"></path>
                </svg>
              </button>
            </li>
          )
        })
      }
    </List>
  )
};

export default HobbyList
