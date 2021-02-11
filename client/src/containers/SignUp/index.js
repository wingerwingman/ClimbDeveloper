import React, { useState }       from 'react';
import { connect }               from 'react-redux';
import { bindActionCreators }    from 'redux';
import { signUp }                from '../../actions/auth';
import styles                    from './styles.css';

// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js
// https://github.com/auth0-blog/redux-auth/blob/master/components/Login.js
// https://www.sitepoint.com/introduction-to-using-jwt-in-rails/
// http://stackoverflow.com/questions/35381276/redux-async-requests-with-fetch-api

class SignUp extends React.Component {


  componentDidMount () {
    let { auth } = this.props;

    if (auth.user) {
      this.props.history.push('/');
    }
  };

  onSignUpClick (creds) {

    this.props.signUp(creds).then(()=> {
      if (this.props.auth.error !== undefined) {
      } else {
        this.props.history.push('/');
      };
    });

    // this.props.signUp(creds).then(()=> {
    //   this.props.history.push('/');
    // });
  }
  
  handleClick (event) {
      const email = this.refs.email;
      const password = this.refs.password;
      const password_confirmation = this.refs.password_confirmation;
      const creds = { email: email.value.trim(), password: password.value.trim(), password_confirmation: password_confirmation.value.trim() };
      this.onSignUpClick(creds);
  }

  

  render () {

    const hStyle = { color: 'red' };

    return (

      <div className={styles['email-wrapper']}>
        <input type='text' ref='email' placeholder='Email' />
        <input type='password' ref='password' placeholder='Password' />
        <input type='password' ref='password_confirmation' placeholder='Confirm Password' />
        <button onClick={(event) => { this.handleClick(event) }} className="btn btn-primary">
          {'Sign up'}
        </button>
        <br/>
        <a href='/login'>Login</a>
        { this.props.auth.error &&
          <h3 style={ hStyle } className="error"> { this.props.auth.error[0] } </h3> }
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    auth: state.auth,
    error: state.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    signUp: bindActionCreators(signUp, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
