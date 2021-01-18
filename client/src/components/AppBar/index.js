import React  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store     from '../../store';
// import FlatButton                from 'material-ui/FlatButton';
// // import SvgIcon                   from 'material-ui/SvgIcon';
// import MenuIcon                  from 'material-ui/svg-icons/navigation/menu';
// import { Toolbar, ToolbarGroup } from 'material-ui/Toobar';
// import styles                    from './styles.css';
// import * as stylesjs             from './styles.js';


class AppBar extends React.Component {
  constructor (props) {
    super(props);
    this.props = store;
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/links">Links</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/secret">Secret</NavLink>
        {this.logInOut()}

        {/* <Toolbar style={stylesjs.menuButton}>
          <ToolbarGroup firstChild={true}>
            <FlatButton
              className={styles['menu-button']}
              onTouchTap={onLeftIconButtonTouchTap}
              icon={<MenuIcon />}
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <FlatButton label="Home" onTouchTap={this.handleClick.bind(this, '/')} />
            <FlatButton label="Links" onTouchTap={this.handleClick.bind(this, '/links')} />
            <FlatButton label="About" onTouchTap={this.handleClick.bind(this, '/about')} />
            <FlatButton label="Secret" onTouchTap={this.handleClick.bind(this, '/secret')} />
            {this.logInOut()}
          </ToolbarGroup>
        </Toolbar> */}
      </div>
    );
  }
}

export default connect( AppBar);
