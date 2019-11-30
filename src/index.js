import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from "./componets/app";
import {HobbiesServiceProvider} from './componets/hobbies-service-context'
import store from './store'
import ErrorBoundry from "./componets/error-boundry";
import UserService from "./services/user-service";

const userService = new UserService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <HobbiesServiceProvider value={userService}>
        <App />
      </HobbiesServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);