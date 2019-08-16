import React from 'react';

export class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.openUser = this.openUser.bind(this);
      this.closeUser = this.closeUser.bind(this);
      this.state = {isLoggedIn: false, isUserOpen: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false, isUserOpen: false});
    }

    openUser() {
        this.setState({isUserOpen: true});
    }
    
    closeUser() {
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
        button = <button className='user-icon' onMouseEnter={this.openUser} onMouseLeave={this.closeUser}>DC</button>;
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
          <div className={`user-info ${userCard}`} onMouseEnter={this.openUser} onMouseLeave={this.closeUser}>
                <p className='logged-in-status'>Logged In<br /><span className='user-email'>darius@swyfft.com</span></p>
                <button className='log-out-button' onClick={this.handleLogoutClick}>Log Out</button>
                <div className='arrow-up'></div>
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