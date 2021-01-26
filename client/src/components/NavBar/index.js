import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }    from 'redux';
import { NavLink, Router, withRouter } from 'react-router-dom';
import { requireAuth }          from '../../utilities/auth';
import { logoutUser }            from '../../actions/auth';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';


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

    // eslint-disable-next-line
    return new Promise( (fulfill, reject) => {
      this.props.history.push('/');
      fulfill(true);
    }).then(() => {
      logoutUser();
    });
  }

  logInOut () {

    // eslint-disable-next-line
    let { auth, logoutUser } = this.props;

    if (auth.user) {
      return <LinkContainer to="/logout" onClick={this.logoutUser}><Nav.Link>Logout</Nav.Link></LinkContainer>
    } else {
      return <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
    }
  }

  render () {
    // eslint-disable-next-line
    // let { title, onLeftIconButtonTouchTap } = this.props;

    return (
      <div className="navbar">
  
        {/* <Navbar bg="light">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/links">Links</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/secret">Secret</NavLink>
          {this.logInOut()}
        </Navbar> */}
        <Navbar bg="light" expand="lg">
          {/* <LinkContainer to="/">
            <Navbar.Brand></Navbar.Brand>
          </LinkContainer> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/links">
            <Nav.Link>Links</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/secret">
            <Nav.Link>Secret</Nav.Link>
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