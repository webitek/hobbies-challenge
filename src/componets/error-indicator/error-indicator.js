import React from 'react';
import {ErrorOps} from '../styles/common/style'

const ErrorIndicator = () => {
  return (
    <ErrorOps>
      <p className="title">Oops!</p>
      <div className="text">
        <p>Try to reload page</p>
      </div>
    </ErrorOps>
  )
};

export default ErrorIndicator;
