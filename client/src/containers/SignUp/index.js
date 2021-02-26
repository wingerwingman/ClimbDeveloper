import React, { useState }       from 'react';
import { connect }               from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { bindActionCreators }    from 'redux';
import { signUp }                from '../../actions/auth';
import styles                    from './styles.css';

// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js
// https://github.com/auth0-blog/redux-auth/blob/master/components/Login.js
// https://www.sitepoint.com/introduction-to-using-jwt-in-rails/
// http://stackoverflow.com/questions/35381276/redux-async-requests-with-fetch-api

class SignUp extends React.Component {

  constructor (props) {
    super(props);
    this.state = { country: '', region: '', email: '', password: '', password_confirmation: '', def_location: '', name: '',  gender: '', area_code: '', address: '', language: '', dob: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    let { auth } = this.props;

    if (auth.user) {
      this.props.history.push('/');
    }
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  handleChange(event) {
    return this.setState({ [event.target.name]: event.target.value });
  }

  onSignUpClick (creds) {
    this.props.signUp(creds).then(()=> {
      if (this.props.auth.error !== undefined) {
      } else {
        this.props.history.push('/');
      };
    });
  }
    
  handleClick (event) {
    event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;
      const password_confirmation = this.state.password_confirmation;
      const name = this.state.name;
      const dob = this.state.dob;
      const def_location = this.state.def_location;
      const gender = this.state.gender;
      const address = this.state.address;
      const area_code = this.state.area_code;
      const language = this.state.language;
      const country = this.state.country;
      const state = this.state.region;
      const creds = { email: email.trim(), password: password.trim(), password_confirmation: password_confirmation.trim(), name: name.trim(), dob: dob.trim(), def_location: def_location.trim(), gender: gender.trim(), address: address.trim(), area_code: area_code.trim(), language: language.trim(), country: country.trim(), state: state.trim() };
      console.log(creds);
      this.onSignUpClick(creds);
  }
  

  render () {
    const hStyle = { color: 'red' };
    let errors = this.props.auth.error;
    const { country, region } = this.state;

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
        <input type='text' placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange} />
        <input type='password' placeholder='Passowrd' name="password" value={this.state.password} onChange={this.handleChange} />
        <input type='password' placeholder='Confirm Password' name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
        <input type='text' placeholder='Name' name="name" value={this.state.name} onChange={this.handleChange} />
        <input type='text' placeholder='Date of Birth' name="dob" value={this.state.dob} onChange={this.handleChange} />
        <input type='text' placeholder='Default Location' name="def_location" value={this.state.def_location} onChange={this.handleChange} />
        <input type='text' placeholder='Gender' name="gender" value={this.state.gender} onChange={this.handleChange} />
        <input type='text' placeholder='Street Address' name="address" value={this.state.address} onChange={this.handleChange} />
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
          <input type='text' placeholder='Area Code' name="area_code" value={this.state.area_code} onChange={this.handleChange} />
        <input type='text' placeholder='Language' name="language" value={this.state.language} onChange={this.handleChange} />
        <button onClick={(event) => { this.handleClick(event) }} className="btn btn-primary">
          {'Sign up'}
        </button>
        <inpute type="submit" value="Sign up" />
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
