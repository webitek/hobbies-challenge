import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App                      from "./components/app";
import {HobbiesServiceProvider} from './components/hobbies-service-context'
import store                    from './store'
import ErrorBoundry             from "./components/error-boundry";
import UserService              from "./services/user-service";

import './styles/core.scss'

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