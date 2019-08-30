import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import onClickOutside from "react-onclickoutside";
import {Container} from 'react-bootstrap';
import './navbar.scss';

// Image Components
import {ReactComponent as MultiLogo} from '../../assets/images/swyfft-wordmark-logo-multi.svg';
import {ReactComponent as WhiteLogo} from '../../assets/images/white-wordmark-logo.svg';
import {ReactComponent as Alabama} from '../../assets/images/alabama.svg';
import {ReactComponent as California} from '../../assets/images/california.svg';
import {ReactComponent as Florida} from '../../assets/images/florida.svg';
import {ReactComponent as Illinois} from '../../assets/images/illinois.svg';
import {ReactComponent as Massachusetts} from '../../assets/images/massachusetts.svg';
import {ReactComponent as NewJersey} from '../../assets/images/newjersey.svg';
import {ReactComponent as NewYork} from '../../assets/images/newyork.svg';
import {ReactComponent as Texas} from '../../assets/images/texas.svg';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleOpenUserClick = this.handleOpenUserClick.bind(this);
        this.handleCloseUserClick = this.handleCloseUserClick.bind(this);
        this.handleShowStates = this.handleShowStates.bind(this);
        this.handleHideStates = this.handleHideStates.bind(this);
        this.setSelectedIndex = this.setSelectedIndex.bind(this);

        this.state = {
          isLoggedIn: false, 
          isUserOpen: false,
          products: ['Homeowners', 'Commercial Package', 'E&S Commercial Package'],
          showStates: false,
          selectedIndex: [0],
          stateList: []
        };
      }

      // Login methods
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
        this.handleHideStates();
      }

      setSelectedIndex(index) {
        this.setState({selectedIndex: index});
      }

      handleShowStates(product, index) {
        this.setSelectedIndex(index);
        switch (product[this.state.selectedIndex]) {
          case product[0]:
              this.setState({
                stateList: [
                  'Alabama', 
                  'California', 
                  'Florida', 
                  'Illinois', 
                  'Massachusetts',
                  'New Jersey', 
                  'New York', 
                  'Texas']
              });
              break;
          case product[1]:
              this.setState({
                stateList: [
                  'California', 
                  'Illinois', 
                  'Florida']
              });
              break;
          case product[2]:
              this.setState({
                stateList: ['Florida']
              });
              break;
          default: this.setState({
            stateList: []
          });
        };
        this.setState({showStates: true});
      }

      handleHideStates() {
        this.setState({showStates: false});
      }

      render() {
        const path = this.props.location.pathname;

        const handleNavbarClass = () => {
          let navbarClass;
          switch(path) {
            case '/Homeowners':
              navbarClass = 'homeowners-nav';
              break;
            case '/Commercial-Package':
              navbarClass = 'commercial-nav';
              break;
            case '/E&S-Commercial-Package':
              navbarClass = 'commercial-nav';
              break;
            default: navbarClass = 'standard-nav';
          }
          return navbarClass;
        }

        const handleNewQuoteLink = () => {
          let link;
          if (path.includes('Home')) {
            link = '/Homeowners';
          } else if (path.includes('E&S')) {
            link = '/E&S-Commercial-Package';
          } else {
            link = '/Commercial-Package';
          } return link;
        }

        const StateSvg = props => {
          let stateImage;
          switch (props.state) {
            case 'Alabama' : 
              stateImage = <Alabama className='state-svg' />;
              break;
            case 'California' : 
              stateImage = <California className='state-svg' />;
              break;
            case 'Florida' : 
              stateImage = <Florida className='state-svg' />;
              break;
            case 'Illinois' : 
              stateImage = <Illinois className='state-svg' />;
              break;
            case 'Massachusetts' : 
              stateImage = <Massachusetts className='state-svg' />;
              break;
            case 'NewJersey' : 
              stateImage = <NewJersey className='state-svg' />;
              break;
            case 'NewYork' : 
              stateImage = <NewYork className='state-svg' />;
              break;
            case 'Texas' : 
              stateImage = <Texas className='state-svg' />;
              break;
            default: stateImage = '';
          }
          return stateImage;
        }

          return (
            <Container fluid={true} className={`navbar-container ${handleNavbarClass()}`}>
                <nav className='navigation'>

                  <Link to='/Homeowners'>
                    {handleNavbarClass() === 'commercial-nav' ? <WhiteLogo alt='Swyfft Insurance'  /> : <MultiLogo alt='Swyfft Insurance'  />}
                  </Link>

                  <div className='product-select'>
                    <div className='product-list'>
                      {this.state.products.map((product, index) => (
                          <div 
                            className={`product-link ${path.includes('/' + product.split(' ').join('-')) ? 'selected' : ''}`} 
                            id={product}
                            key={index}
                            onMouseEnter={() => this.handleShowStates(product, index)}
                            onMouseOver={() => this.handleShowStates(product, index)}
                            onMouseLeave={this.handleHideStates}>
                              <Link to={'/' + product.split(' ').join('-')}>{product}</Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='navigation-menu'>
                    {handleNavbarClass() !== 'standard-nav' ? this.state.isLoggedIn && <ul className='logged-in-items'>
                        <li>History</li>
                        <li className='addresses'>Addresses</li>
                    </ul> : this.state.isLoggedIn && <ul className='logged-in-items'>
                        <li>History</li>
                        <li className='addresses'>Addresses</li>
                        <Link to={handleNewQuoteLink()}>
                          <button className='new-quote-button'>+ New Quote</button>
                        </Link>
                    </ul>}

                    {this.state.isLoggedIn ? <button className='user-icon' onClick={this.handleOpenUserClick}>DC</button> : <button className='login-button' onClick={this.handleLoginClick}>Log In</button>}

                    {this.state.isUserOpen && <div className={`user-info`}>
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
                </nav>
                <div id='statesContainer' className={`states-container ${this.state.showStates ? 'show-states' : ''}`}>
                  <div className='product-detail'>Available In:</div>
                    <div className='states'>
                      {this.state.stateList.map((state, index) => <span className='state-instance' key={index}>
                        <StateSvg state={state.replace( /\s/g, '')} />
                        <span>{state}</span>
                      </span>)}
                    </div>
                </div>
            </Container>
          );
      }
}

export default compose(
  withRouter,
  onClickOutside
)(NavBar);