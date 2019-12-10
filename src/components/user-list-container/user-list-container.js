import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux'

import {usersRequested} from "../../actions";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import UserList from "../user-list";

import {Form} from "../styles/form/style";

function UserListContainer() {
  const [newUserName, setNewUserName] = useState('')

  const { users, loading, error } = useSelector(({ userList }) => ({ users: userList.users, loading: userList.loading, error: userList.error }));
  const dispatch = useDispatch()

  const initFetch = useCallback(() => {
    dispatch(usersRequested())
  }, [dispatch]);

  useEffect(() => {
    initFetch()
    // dispatch(usersRequested())
  }, [initFetch])

  const onUserNameChange = e => {
    setNewUserName( e.target.value );
  };

  const onSubmit = e => {
    e.preventDefault()
    if(!newUserName.length) return
    dispatch({ type: 'USER_ADDED', payload: newUserName })

    setNewUserName('');
  };

  const handlerSetActive = (userId) => {
    dispatch({ type: 'USER_ACTIVATED', payload: userId })
    dispatch({ type: 'ACTIVATE_HOBBIES_BY_USER', payload: userId })
  }

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
               value={ newUserName }
               onChange={ onUserNameChange }
               placeholder="Enter user name" />
        <button>Add user</button>
      </Form>
      <UserList users={users}
                handlerSetActive={handlerSetActive}/>
    </div>
  )
}

export default UserListContainer
