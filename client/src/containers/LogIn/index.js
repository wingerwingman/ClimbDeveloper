import React, { useState }       from 'react';
import { connect }               from 'react-redux';
import { bindActionCreators }    from 'redux';
import { loginUser }             from '../../actions/auth';
import styles                    from './styles.css';

class LogIn extends React.Component {

  // state = {
  //     error: ''
  //   }
    
    componentDidMount () {
    // const error = useState("");
    let { auth } = this.props;

    if (auth.user) {
      this.props.history.push('/');
    }
  }

  onLoginClick (creds) {
    this.props.loginUser(creds).then(()=> {
      let error = this.props.auth.error[0];
      if (error === true) {
        { error &&
          <h3 className="error"> { error } </h3> }
      } else {
        this.props.history.push('/');
      };
    });
  }

  handleClick (event) {
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.onLoginClick(creds);
  }

  render () {

    return (
      <div className={styles['email-wrapper']}>

        <input type='text' ref='email' placeholder='Email' />
        <input type='password' ref='password' placeholder='Password' />
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          {'Login'}
        </button>
        <br/>
        <a href='/signup'>Sign Up</a>
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
    loginUser: bindActionCreators(loginUser, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
