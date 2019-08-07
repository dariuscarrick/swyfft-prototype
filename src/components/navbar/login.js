import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <button className='user-icon' onClick={this.handleLogoutClick}>DC</button>;
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