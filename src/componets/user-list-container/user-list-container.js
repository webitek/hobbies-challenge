// import React, {Component} from 'react';
import React, { useState, useEffect } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import compose from "../../utils/compose";
import {withHobbiesService} from "../hoc";
import {fetchUsers, userAdded, userActivated, activeteHobbiesByUser } from '../../actions'

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import UserList from "../user-list";

import {Form} from "../styles/form/style";

function UserListContainer(props) {
  const [newUserName, setNewUserName] = useState('')

  useEffect(() => {
    props.fetchUsers()
  }, [])

  const onUserNameChange = e => {
    setNewUserName( e.target.value );
  };

  const onSubmit = e => {
    e.preventDefault()
    if(!newUserName.length) return
    props.onUserAdded(newUserName)

    setNewUserName('');
  };

  const handlerSetActive = (userId) => {
    props.onUserActivated(userId)
    props.activeteHobbiesByUser(userId)
  }

  const {users, loading, error} = props;

  if(loading) {
    return <Spinner />
  }
  if(error) {
    return <ErrorIndicator />
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input type="text"
               value={newUserName}
               onChange={onUserNameChange}
               placeholder="Enter user name"/>
        <button>Add user</button>
      </Form>
      <UserList users={users}
                handlerSetActive={handlerSetActive}/>
    </div>
  )
}

const mapStateToProps = ({userList:{users, loading, error}}) => {
  return {
    users,
    loading,
    error,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const {userService} = ownProps;
  return bindActionCreators({
    fetchUsers: fetchUsers(userService),
    onUserAdded: userAdded,
    onUserActivated: userActivated,
    activeteHobbiesByUser: activeteHobbiesByUser,
  }, dispatch)
}

export default compose(
  withHobbiesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(UserListContainer)