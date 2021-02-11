import {
  USER_ACCESS_REQUESTED,
  USER_ACCESS_ERROR,
  USER_LOGED_OUT,
  USER_SIGNUP_ERROR
} from '../constants';

export function loginUser (creds) {
  
  let config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: creds.email,
      password: creds.password,
      error: creds.error
    })
  };
  
  return dispatch => {
    return fetch('http://localhost:3000/auth/sign_in', config)
      .then((response) => {
        return response.json()
        .then(user => ({ user, response }));
        // eslint-disable-next-line
      }).then(({ user, response }) =>  {
        if (!user.auth_token) {
          dispatch({ type: USER_ACCESS_ERROR, payload: user });
        } else {
          dispatch({ type: USER_ACCESS_REQUESTED, payload: user });
        }
      }).catch(error => {
        // Deal with the error
        dispatch(errorActionCreator("USER_ACCESS_ERROR ", error))
      })
    };
  }
  
export function signUp (creds) {
  // let config = {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     email: creds.email,
  //     password: creds.password,
  //     password_confirmation: creds.password_confirmation,
  //     error: creds.error
  //   })
  // };
  const user = creds;
  return dispatch => {
    return fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user}, config)
    })
      .then(response => response.json())
      
      .then(jresp => {
        dispatch(({
          // name: newUser.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation})
        );
      }).then(({ user, response }) =>  {
        if (!user.auth_token) {
          dispatch({ type: USER_SIGNUP_ERROR, payload: user });
        } else {
          dispatch({ type: USER_ACCESS_REQUESTED, payload: user });
        }
      }).catch(error => {
        // Deal with the error
        dispatch(errorActionCreator("USER_SIGNUP_ERROR ", error))
      })
    };
}

export function logoutUser () {
  return dispatch => {
    // eslint-disable-next-line
    return new Promise( (fulfill, reject) => {
      dispatch({ type: USER_LOGED_OUT });
      fulfill(true);
    });
  };
}

export const errorActionCreator = (errorType, error) => {
  return {
    type: errorType,
    error: true,
    payload: error,
  }
}
