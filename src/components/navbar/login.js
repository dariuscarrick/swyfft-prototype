import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import onClickOutside from "react-onclickoutside";

export class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.handleOpenUserClick = this.handleOpenUserClick.bind(this);
      this.handleCloseUserClick = this.handleCloseUserClick.bind(this);
      this.state = {isLoggedIn: false, isUserOpen: false};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false, isUserOpen: false});
    }

    handleOpenUserClick() {
        this.setState({isUserOpen: true});
    }
    
    handleCloseUserClick() {
        this.setState({isUserOpen: false});
    }

    handleClickOutside = evt => {
      this.handleCloseUserClick();
    }

    getNavbarClass() {
    let navClass;
    switch (this.props.location.pathname) {
      case '/Homeowners':
        navClass = 'homeowners-nav';
        break;
      case '/E&S-Commercial-Package':
        navClass = 'commercial-nav';
        break;
      case '/Commercial-Package':
        navClass = 'commercial-nav';
        break;
      default: navClass = 'standard-nav';
    }
  return navClass;
}

getNewQuoteLink() {
  const path = this.props.location.pathname;
  let link;
  if (path.includes('Home')) {
    link = '/Homeowners';
  } else if (path.includes('E&S')) {
    link = '/E&S-Commercial-Package';
  } else {
    link = '/Commercial-Package';
  } return link;
  
}
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      const isUserOpen = this.state.isUserOpen;
      let button;

  
      if (isLoggedIn) {
        button = <button className='user-icon' onClick={this.handleOpenUserClick}>DC</button>;
      } else {
        button = <button className='login-button' onClick={this.handleLoginClick}>Log In</button>;
      }
  
      return (
        <div className='navigation-menu'>
          {this.getNavbarClass() !== 'standard-nav' ? isLoggedIn && <ul className='logged-in-items'>
              <li>History</li>
              <li className='addresses'>Addresses</li>
          </ul> : isLoggedIn && <ul className='logged-in-items'>
              <li>History</li>
              <li className='addresses'>Addresses</li>
              <Link to={this.getNewQuoteLink()}>
                <button className='new-quote-button'>+ New Quote</button>
              </Link>
          </ul>}
          {button}
          {isUserOpen && <div className={`user-info`}>
                <p className='logged-in-status'>Logged In<br /><span className='user-email'>darius@swyfft.com</span></p>
                <button className='log-out-button' onClick={this.handleLogoutClick}>Log Out</button>
                <div className='arrow-up'></div>
          </div>}
          <menu className='hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
           </menu>
        </div>
      );
    }
  }

  export default compose(
    withRouter,
    onClickOutside
  )(LoginControl);