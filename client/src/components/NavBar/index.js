import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }    from 'redux';
import { NavLink, Router, withRouter } from 'react-router-dom';
import { logoutUser }            from '../../actions/auth';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/cdlogo.png'

class NavigationBar extends React.Component {
  constructor (props) {
    super(props);
    
    this.logInOut = this.logInOut.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentWillMount () {
    let { auth } = this.props;
  }
  

  handleClick (url) {
    this.props.history.push(url);
  }

  logoutUser () {
    let { logoutUser } = this.props;

    return new Promise( (fulfill, reject) => {
      this.props.history.push('/');
      fulfill(true);
    }).then(() => {
      logoutUser();
    });
  }

  logInOut () {

    let { auth, logoutUser } = this.props;

    if (auth.user) {
      return <LinkContainer to="/logout" onClick={this.logoutUser}><Nav.Link>Logout</Nav.Link></LinkContainer>
    } else {
      return <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
    }
  }

  render () {

    return (
      <div className="navbar">

        <Navbar bg="primary" variant="dark">
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <a class="navbar-brand">
          <img src={Logo} height={80} width={225} style={{textAlign:"left"}} />
        </a>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/links">
            <Nav.Link>Links</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          {this.logInOut()}
        </Nav>
          </Navbar.Collapse>
          
        </Navbar>

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    logoutUser: bindActionCreators(logoutUser, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar));