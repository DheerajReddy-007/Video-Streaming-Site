import React from 'react';
import ReactDOM from 'react-dom';
import { App, App_Signin, App_Signup } from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, componse } from 'redux';
import thunk from 'redux-thunk';



  function _App_(){
    ReactDOM.render(
      <App />,
    document.getElementById('root')
  );
  }

  function _Signin_(){
    ReactDOM.render(
      <App_Signin />,
    document.getElementById('root')
  );
  }

  function _Signup_(){
    ReactDOM.render(
      <App_Signup />,
    document.getElementById('root')
  );
  }

_App_();

export { _App_, _Signin_, _Signup_ };


