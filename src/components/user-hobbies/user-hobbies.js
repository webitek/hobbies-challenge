import React from 'react';
import {Wrapper} from '../styles/user-hobbies/style'
import UserListContainer from "../user-list-container";
import HobbyListContainer from "../hobby-list-container";

const UserHobbies = () => {
  return (
    <div className="container">
      <Wrapper>
        <div className="cl">
          <UserListContainer />
        </div>
        <div className="cr">
          <HobbyListContainer />
        </div>
      </Wrapper>
    </div>
  );
};

export default UserHobbies;
