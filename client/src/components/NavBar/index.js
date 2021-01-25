import React  from 'react';
import { connect } from 'react-redux';
import { NavLink, Router, withRouter } from 'react-router-dom';
// eslint-disable-next-line
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';
// eslint-disable-next-line
// import { Container, Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
// // import FlatButton                from '@material-ui/core/FlatButton';
// import SvgIcon from '@material-ui/core/SvgIcon';

// import MenuIcon from '@material-ui/icons/Menu';
// import { Toolbar, ToolbarGroup } from 'material-ui/Toobar';
// import * as stylesjs             from './styles.js';


class NavigationBar extends React.Component {
  constructor (props) {
    super(props);

    this.logInOut = this.logInOut.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }


  handleClick (url) {
    this.props.router.push(url);
  }

  logoutUser () {
    let { logoutUser } = this.props;

    // eslint-disable-next-line
    return new Promise( (fulfill, reject) => {
      this.props.router.push('/');
      fulfill(true);
    }).then(() => {
      logoutUser();
    });
  }

  logInOut () {

    // eslint-disable-next-line
    let { auth, logoutUser } = this.props;

    if (auth.user) {
      return <NavLink label="Logout" onTouchTap={this.logoutUser} />;
    } else {
      return <NavLink label="Login" onTouchTap={this.handleClick.bind(this, '/login')} />;
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
          <LinkContainer to="/Home">
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

export default NavigationBar;
