import React from 'react';
import {Row} from '../styles/user-hobbies/style'
import UserListContainer from "../user-list-container";
import HobbyListContainer from "../hobby-list-container";

const UserHobbies = () => {
  return (
    <div>
      <Row>
        <UserListContainer />
        <HobbyListContainer />
      </Row>
    </div>
  );
};

export default UserHobbies;
