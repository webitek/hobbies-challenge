import React from 'react';
import {List} from '../styles/user-list/style'

function UserList({users, handlerSetActive}) {
  return (
    <List>
      {
        users.map(({name, active, id}) => {
          return (
            <li key={id}
                className={active ? 'active' : ''}>
              <span onClick={() => {handlerSetActive(id)}}>{name}</span>
            </li>
          )
        })
      }
    </List>
  )
}

export default UserList