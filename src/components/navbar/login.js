import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.openUserClick = this.openUserClick.bind(this);
      this.closeUserClick = this.closeUserClick.bind(this);
      this.state = {isLoggedIn: false, isUserOpen: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false, isUserOpen: false});
    }

    openUserClick() {
        this.setState({isUserOpen: true});
    }
    
    closeUserClick() {
        this.setState({isUserOpen: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      const isUserOpen = this.state.isUserOpen;
      let button;
      let userCard;

      if(isUserOpen) {
          userCard = 'display';
      } else {
          userCard= 'display-none';
      }
  
      if (isLoggedIn) {
        button = <button className='user-icon' onClick={isUserOpen ? this.closeUserClick : this.openUserClick}>DC</button>;
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
          <div className={`user-info ${userCard}`}>
                <p className='logged-in-status'>Logged in as: <br /><span className='user-email'>darius@swyfft.com</span></p>
                <button className='log-out-button' onClick={this.handleLogoutClick}>Log Out</button>
          </div>
          <menu className='hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
           </menu>
        </div>
      );
    }
  }

  export default LoginControl;