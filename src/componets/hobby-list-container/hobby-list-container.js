import React, { useState }  from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Spinner from "../spinner";

import { hobbyAdded,  hobbyRemoved } from "../../actions";
import compose from "../../utils/compose";
import {withHobbiesService} from "../hoc";
import HobbyList from "../hobby-list";
import {Form} from "../styles/form/style";

const HobbyListContainer = (props) => {
  const {
    hobbies,
    activeUser,
    usersLength,
    usersLoading
  } = props
  const [hobbyName, setHobbyName] = useState('')
  const [hobbyPassion, setHobbyPassion] = useState('')
  const [hobbyYear, setHobbyYear] = useState('')

  const onHobbyChanged = e => {
    setHobbyName( e.target.value );
  };
  const onPassionChanged = e => {
    setHobbyPassion( e.target.value );
  };
  const onYearChanged = e => {
    setHobbyYear(e.target.value);
  };
  const onYearKeyPress = e => {
    if(!/^\d+$/.test(e.key) || hobbyYear.length >= 4) {
      e.preventDefault();
    }
  };
  const onSubmit = e => {
    e.preventDefault()
    if(!hobbyName.length || !hobbyPassion.length || hobbyYear.length !== 4) return
    props.onHobbyAdded({
      hobby:
        {
          title: hobbyName,
          passion: hobbyPassion,
          year: hobbyYear,
        },
      activeUser})
    setHobbyName('');
    setHobbyPassion('');
    setHobbyYear('');
  };
  const handleDeleteHobby = (id) => {
    props.onHobbyRemoved({hobby: {id}, activeUser})
  }
  if(usersLoading) {
    return <Spinner />
  }

  if(!usersLength) {
    return (
      <h2>Try to add new user</h2>
    )
  }

  if(!hobbies) {
    return (
      <h2>Choose a user to see his hobbies</h2>
    )
  }
  const {userHobbies} = hobbies
  const options = ['', 'Low','Medium','High','Very-High',]
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <select value={hobbyPassion} onChange={onPassionChanged}>
          {options.map((option, i) => {
            if(i === 0) {
              return <option value={option} key="disabled" disabled>Select passion level</option>
            }
            return <option value={option} key={option} >{option}</option>
          })}
        </select>
        <input type="text"
               value={hobbyName}
               onChange={onHobbyChanged}
               placeholder="Enter a hobby"/>
        <input type="text"
               placeholder="YYYY"
               onChange={onYearChanged}
               onKeyPress={onYearKeyPress}
               value={hobbyYear} />
        <button>Add hobby</button>
      </Form>
      <HobbyList userHobbies={userHobbies}
                 handleDeleteHobby={handleDeleteHobby}/>
    </div>
  )
};

const mapStateToProps = ({userList: {users, loading}, hobbyList:{hobbies, error}}) => {
  const activeUser = users.find(user => user.active)
  const selectedHobbyList = activeUser ? hobbies.find(item => activeUser.id === item.userId) : null;
  const usersLength = users.length
  return {
    hobbies: selectedHobbyList,
    activeUser,
    error,
    usersLength,
    usersLoading: loading,
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
