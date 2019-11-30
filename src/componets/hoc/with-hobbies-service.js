import React from 'react';
import {HobbiesServiceConsumer} from "../hobbies-service-context";

const withHobbiesService = () => (Wrapped) => {
  return (props) => {
    return (
      <HobbiesServiceConsumer>
        {
          (userService) => {
            return (
              <Wrapped {...props}
                       userService={userService}/>
            )
          }
        }
      </HobbiesServiceConsumer>
    )
  }
};

export default withHobbiesService
