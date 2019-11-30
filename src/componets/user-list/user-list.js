// import React, {Component} from 'react';
import React, { useState, useEffect } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import compose from "../../utils/compose";
import {withHobbiesService} from "../hoc";
import {fetchUsers, userAdded } from '../../actions'

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

function UserList(props) {
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

  const {users, loading, error} = props;

  if(loading) {
    return <Spinner />
  }
  if(error) {
    return <ErrorIndicator />
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text"
               value={newUserName}
               onChange={onUserNameChange}
               placeholder="Type user name"/>
        <button>Add user</button>
      </form>
      <ul>
        {
          users.map(({name, id}) => {
            return (
              <li key={id}>{name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

/*class UserList extends Component {

  state = {
    newUserName: ''
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  onUserNameChange = (e) => {
    this.setState({
      newUserName: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.newUserName.length) return
    this.props.onUserAdded(this.state.newUserName)
    this.setState({
      newUserName: ''
    })
  }

  render() {
    const {users, loading, error} = this.props;
    if(loading) {
      return <Spinner />
    }
    if(error) {
      return <ErrorIndicator />
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
                 value={this.state.newUserName}
                 onChange={this.onUserNameChange}
                 placeholder="Type user name"/>
          <button>Add user</button>
        </form>
        <ul>
          {
            users.map(({name, id}) => {
              return (
                <li key={id}>{name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}*/


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
  }, dispatch)
}

export default compose(
  withHobbiesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(UserList)