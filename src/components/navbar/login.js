import React from 'react';
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
    };
  
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
          {isLoggedIn && <ul className='logged-in-items'>
              <li>History</li>
              <li className='addresses'>Addresses</li>
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

  export default onClickOutside(LoginControl);