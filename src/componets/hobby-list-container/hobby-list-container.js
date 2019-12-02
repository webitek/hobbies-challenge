import React, { useState }  from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { hobbyAdded,  hobbyRemoved } from "../../actions";
import compose from "../../utils/compose";
import {withHobbiesService} from "../hoc";
import HobbyList from "../hobby-list";

import {Form} from "../styles/form/style";

const HobbyListContainer = (props) => {
  const {hobbies, activeUser} = props
  const [hobbyName, setHobbyName] = useState('')

  const onHobbyChanged = e => {
    setHobbyName( e.target.value );
  };
  const onSubmit = e => {
    e.preventDefault()
    if(!hobbyName.length) return
    props.onHobbyAdded({hobby: {title: hobbyName}, activeUser})
    setHobbyName('');
  };
  const handleDeleteHobby = (id) => {
    props.onHobbyRemoved({hobby: {id}, activeUser})
  }

  if(!hobbies) {
    return (
      <h2>Choose user</h2>
    )
  }
  const {userHobbies} = hobbies
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input type="text"
               value={hobbyName}
               onChange={onHobbyChanged}
               placeholder="Type hobby"/>
        <button>Add hobby</button>
      </Form>
      {/*<form onSubmit={onSubmit}>
        <input type="text"
               value={hobbyName}
               onChange={onHobbyChanged}
               placeholder="Type hobby"/>
        <button>Add hobby</button>
      </form>*/}
      <h2>Hobby List</h2>
      <HobbyList userHobbies={userHobbies}
                 handleDeleteHobby={handleDeleteHobby}/>
    </div>
  )
};

const mapStateToProps = ({userList: {users}, hobbyList:{hobbies, error}}) => {
  const activeUser = users.find(user => user.active)
  const selectedHobbyList = activeUser ? hobbies.find(item => activeUser.id === item.userId) : null;
  return {
    hobbies: selectedHobbyList,
    activeUser,
    error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onHobbyAdded: hobbyAdded,
    onHobbyRemoved: hobbyRemoved,
  }, dispatch)
}

export default compose(
  withHobbiesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HobbyListContainer)
