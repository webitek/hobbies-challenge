import React from 'react';
import UserHobbies from "../user-hobbies";
import {Header} from '../styles/common/style'

const App = () => {
  return (
    <main className="wrapper">
      <Header className="header">
        <div className="container">
          <h2 className="header-title">User Hobbies</h2>
        </div>
      </Header>
      <UserHobbies />
    </main>
  )
};

export default App;
