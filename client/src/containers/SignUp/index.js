import React                     from 'react';
import { connect }               from 'react-redux';
import { bindActionCreators }    from 'redux';
import { signUp }                from '../../actions/auth';
import styles                    from './styles.css';

// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js
// https://github.com/auth0-blog/redux-auth/blob/master/components/Login.js
// https://www.sitepoint.com/introduction-to-using-jwt-in-rails/
// http://stackoverflow.com/questions/35381276/redux-async-requests-with-fetch-api

class SignUp extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     input: {},
  //     errors: {}, 
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.onSignUpClick = this.onSignUpClick.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  componentDidMount () {
    let { auth } = this.props;

    if (auth.user) {
      this.props.router.push('/');
    }
  };

  // handleChange(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;
  
  //   this.setState({
  //     input
  //   });
  // }

  onSignUpClick (creds) {
    this.props.signUp(creds).then(()=> {
      this.props.history.push('/');
    });
  }
  
  handleClick (event) {
    // if(this.validate()){
      console.log(this.state);
      const email = this.refs.email;
      const password = this.refs.password;
      const password_confirmation = this.refs.password_confirmation;
      const creds = { email: email.value.trim(), password: password.value.trim(), password_confirmation: password_confirmation.value.trim() };
      this.onSignUpClick(creds);
    // }
  }

  // validate(){
  //   let input = this.state.input;
  //   let errors = {};
  //   let isValid = true;

  //   if (!input["email"]) {
  //     isValid = false;
  //     errors["email"] = "Please enter your email Address.";
  //   }

  //   if (typeof input["email"] !== "undefined") {
        
  //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //     if (!pattern.test(input["email"])) {
  //       isValid = false;
  //       errors["email"] = "Please enter valid email address.";
  //     }
  //   }

  //   if (!input["password"]) {
  //     isValid = false;
  //     errors["password"] = "Please enter your password.";
  //   }

  //   if (!input["confirm_password"]) {
  //     isValid = false;
  //     errors["confirm_password"] = "Please enter your confirm password.";
  //   }

  //   if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
  //     if (input["password"] != input["confirm_password"]) {
  //       isValid = false;
  //       errors["password"] = "Passwords don't match.";
  //     }
  //   } 

  //   this.setState({
  //     errors: errors
  //   });

  //   return isValid;
  // }

  render () {

    return (
      // <div>
      //   <form onSubmit={this.handleSubmit}>
  
      //     <div className="form-group">
      //       <label ref="email">Email Address:</label>
      //       <input 
      //         type="text" 
      //         name="email" 
      //         value={this.state.input.email}
      //         onChange={this.handleChange}
      //         className="form-control" 
      //         placeholder="Enter email" 
      //         id="email" />
  
      //         <div className="text-danger">{this.state.errors.email}</div>
      //     </div>
   
      //     <div className="form-group">
      //       <label ref="password">Password:</label>
      //       <input 
      //         type="password" 
      //         name="password" 
      //         value={this.state.input.password}
      //         onChange={this.handleChange}
      //         className="form-control" 
      //         placeholder="Enter password" 
      //         id="password" />
  
      //         <div className="text-danger">{this.state.errors.password}</div>
      //     </div>
  
      //     <div className="form-group">
      //       <label ref="password">Confirm Password:</label>
      //       <input 
      //         type="password" 
      //         name="confirm_password" 
      //         value={this.state.input.confirm_password}
      //         onChange={this.handleChange}
      //         className="form-control" 
      //         placeholder="Enter confirm password" 
      //         id="confirm_password" />
  
      //         <div className="text-danger">{this.state.errors.confirm_password}</div>
      //         <a href='/login'>Login</a>
      //     </div>
              
      //     <input type="submit" value="Submit" className="btn btn-success" />
      //   </form>
      // </div>
      <div className={styles['email-wrapper']}>
        <input type='text' ref='email' placeholder='Email' />
        {/* <div className="text-danger">{this.state.errors.email}</div> */}
        <input type='password' ref='password' placeholder='Password' />
        {/* <div className="text-danger">{this.state.errors.password}</div> */}
        <input type='password' ref='password_confirmation' placeholder='Confirm Password' />
        {/* <div className="text-danger">{this.state.errors.confirm_password}</div> */}
        <button onClick={() => { this.handleClick(event) }} className="btn btn-primary">
          {'Sign up'}
        </button>
        <br/>
        <a href='/login'>Login</a>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    auth: state.auth
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
