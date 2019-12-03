import React from 'react';
import {List, EmptyList } from '../styles/hobby-list/style'
import HobbyItem from '../hobby-item'

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
        userHobbies.map((hobby) => {
          return <HobbyItem key={hobby.id} hobby={hobby} handleDeleteHobby={handleDeleteHobby} />
        })
      }
    </List>
  )
};

export default HobbyList
