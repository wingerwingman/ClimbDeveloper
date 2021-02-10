import {
  USER_ACCESS_REQUESTED,
  USER_ACCESS_ERROR,
  USER_LOGED_OUT
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
    // handleErrors = () => {
    //   return (
    //     <div>
    //       <ul>
    //       {this.state.errors.map(error => {
    //       return <li key={error}>{error}</li>
    //         })}
    //       </ul>
    //     </div>
    //   )
    // };
  }
  
export function signUp (creds) {
  const user = creds;
  return dispatch => {
    return fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user})
    })
      .then(response => response.json())
      .then(jresp => {
        dispatch(({
          // name: newUser.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation})
        );
      }).then(({ response }) =>  {
        if (!user.auth_token) {
          dispatch({ type: USER_ACCESS_ERROR, payload: user });
        } else {
          dispatch({ type: USER_ACCESS_REQUESTED, payload: user });
        }
      }).catch(err => console.log('Error: ', err));
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
