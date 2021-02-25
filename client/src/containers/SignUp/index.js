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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: {}
  //   }
  // }

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
    event.preventDefault();
      const email = this.refs.email;
      const password = this.refs.password;
      const password_confirmation = this.refs.password_confirmation;
      const name = this.refs.name;
      const dob = this.refs.dob;
      const def_location = this.refs.def_location;
      const gender = this.refs.gender;
      const address = this.refs.address;
      const state = this.refs.state;
      const area_code = this.refs.area_code;
      const language = this.refs.language;
      const creds = { email: email.value.trim(), password: password.value.trim(), password_confirmation: password_confirmation.value.trim(), name: name.value.trim(), dob: dob.value.trim(), def_location: def_location.value.trim(), gender: gender.value.trim(), address: address.value.trim(), state: state.value.trim(), area_code: area_code.value.trim(), language: language.value.trim() };
      this.onSignUpClick(creds);
  }
  //   name: creds.name,
  //   dob: creds.dob,
  //   def_location: creds.def_location,
  //   gender: creds.gender,
  //   address: creds.address,
  //   state: creds.state,
  //   area_code: creds.area_code,
  //   language: creds.language,

  

  render () {
    const hStyle = { color: 'red' };
    let errors = this.props.auth.error;

    let errorMap = [];
    if (errors !== undefined) { 
      if (!!this.props.auth.error.email !== false){ 
        errorMap.push(this.props.auth.error.email);
      } else if (!!this.props.auth.error.password !== false) {
        errorMap.push(this.props.auth.error.password);
      } else if (!!this.props.auth.error.password_confirmation !== false) {
        errorMap.push(this.props.auth.error.password_confirmation);
      }
    }


    return (

      <div className={styles['email-wrapper']}>
        <input type='text' ref='email' placeholder='Email' />
        <input type='password' ref='password' placeholder='Password' />
        <input type='password' ref='password_confirmation' placeholder='Confirm Password' />
        <input type='text' ref='name' placeholder='Name' />
        <input type='text' ref='dob' placeholder='DOB' />
        <input type='text' ref='def_location' placeholder='Default Location' />
        <input type='text' ref='gender' placeholder='Gender' />
        <input type='text' ref='address' placeholder='Street address' />
        <input type='text' ref='state' placeholder='State' />
        <input type='text' ref='area_code' placeholder='Area code' />
        <input type='text' ref='language' placeholder='Language' />
        <button onClick={(event) => { this.handleClick(event) }} className="btn btn-primary">
          {'Sign up'}
        </button>
        <br/>
        <a href='/login'>Login</a>
        <h3 style={hStyle} className="error">{errorMap}</h3>
          
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
