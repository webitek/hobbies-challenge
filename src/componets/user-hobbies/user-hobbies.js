import React from 'react';
import {Row} from '../styles/user-hobbies/style'
import UserList from "../user-list";

const UserHobbies = () => {
  return (
    <div>
      <Row>
        <UserList />
        <div>
          <h2>hobbies</h2>
        </div>
      </Row>
    </div>
  );
};

export default UserHobbies;
