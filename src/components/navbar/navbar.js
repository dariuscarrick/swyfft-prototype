import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import onClickOutside from "react-onclickoutside";
import { Container } from 'react-bootstrap';
import { AboveGridXs, GridXxs, GridXs } from '../component-assets/media-queries/media-queries';
import './navbar.scss';

// Image Components
import {ReactComponent as MultiLogo} from '../../assets/images/swyfft-wordmark-logo-multi.svg';
import {ReactComponent as WhiteLogo} from '../../assets/images/white-wordmark-logo.svg';
import {ReactComponent as ShieldLogo} from '../../assets/images/shield.svg';
import {ReactComponent as LocationIcon} from '../../assets/images/location.svg';
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
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
          isLoggedIn: false, 
          isUserOpen: false,
          products: ['Homeowners', 'Commercial Package', 'E&S Commercial Package'],
          showStates: false,
          selectedIndex: [0],
          locationIconActive: '',
          stateList: [],
          modalOpen: false,
          prevScrollpos: 0,
          visible: true
        };
      }

      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }

      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

      handleScroll() {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
        this.handleClickOutside();
      };

      handleLoginClick() {
        this.setState({isLoggedIn: true, modalOpen: false});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false, isUserOpen: false, modalOpen: false});
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
        this.handleCloseModal();
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
                  'Texas'],
                locationIconActive: product 
              });
              break;
          case product[1]:
              this.setState({
                stateList: [
                  'California', 
                  'Illinois', 
                  'Florida'],
                  locationIconActive: product 
              });
              break;
          case product[2]:
              this.setState({
                stateList: ['Florida'],
                locationIconActive: product 
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

      handleOpenModal()  {
        this.setState({modalOpen: true});
      }

      handleCloseModal() {
        this.setState({modalOpen: false});
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

                  <GridXxs>
                    <div className='click-outside' onClick={this.handleClickOutside}></div>
                  </GridXxs>

                  <Link to='/Homeowners'>
                    {handleNavbarClass() === 'commercial-nav' ? <WhiteLogo alt='Swyfft Insurance'  /> : <MultiLogo alt='Swyfft Insurance'  />}
                  </Link>

                  <AboveGridXs>
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
                                  <Link to={'/' + product.split(' ').join('-')} onClick={this.handleClickOutside}>{product}</Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  </AboveGridXs>

                  <GridXs>
                    <div className={`product-select ${this.state.visible ? '' : 'hide-mobile-products'}`}>
                      <div className='product-list'>
                          {this.state.products.map((product, index) => (
                              <div className='mobile-product-instance' key={index}>
                                <div 
                                  className={`product-link ${path.includes('/' + product.split(' ').join('-')) ? 'selected' : ''}`} 
                                  id={product}
                                  key={index}>
                                  <Link to={'/' + product.split(' ').join('-')} onClick={this.handleClickOutside}>{product}</Link>
                                </div>
                                <LocationIcon
                                  className={`product-location-icon${this.state.showStates && this.state.locationIconActive === product ? '-active' : '' }`}
                                  onTouchStart={() => this.handleShowStates(product, index)}
                                  onTouchEnd={() => this.handleShowStates(product, index)}
                                  onClick={() => this.handleShowStates(product, index)}
                                  onMouseDown={() => this.handleShowStates(product, index)}
                                  />
                              </div>
                          ))}
                      </div>
                    </div>
                  </GridXs>

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

                    {this.state.isLoggedIn ? <button className='user-icon' onClick={this.handleOpenUserClick}>DC</button> : this.state.modalOpen ? null : <button className='login-button' onClick={this.handleLoginClick}>Log In</button>}

                    {this.state.isUserOpen && <div className={`user-info`}>
                          <p className='logged-in-status'>Logged In<br /><span className='user-email'>darius@swyfft.com</span></p>
                          <button className='user-info-logout-button' onClick={this.handleLogoutClick}>Log Out</button>
                          <div className='arrow-up'></div>
                    </div>}
                    <menu 
                    className={`hamburger ${this.state.modalOpen ? 'hamburger-close' : ''}`}
                    onClick={this.state.modalOpen ? this.handleCloseModal : this.handleOpenModal}
                    >
                          <div className='line'></div>
                          <div className='line'></div>
                          <div className='line'></div>
                    </menu>
                  </div>
                </nav>

                <div id='statesContainer' className={`states-container ${this.state.showStates ? 'show-states' : ''}`}>
                  <div className='product-detail'><LocationIcon className='states-container-location-icon' /> Available In:</div>
                    <div className='states'>
                      {this.state.stateList.map((state, index) => <span className='state-instance' key={index}>
                        <StateSvg state={state.replace( /\s/g, '')} />
                        <span>{state}</span>
                      </span>)}
                    </div>
                    <GridXs>
                      <div className='close-states-button' onClick={this.handleClickOutside}>
                          <div className='close-line'></div>
                          <div className='close-line'></div>
                      </div>
                    </GridXs>
                </div>

                <div id='hamburger-menu' className={`hamburger-menu ${this.state.modalOpen ? 'modal-open' : ''}`}>
                    <div className='hamburger-contents'>
                    <ShieldLogo className='hamburger-shield-logo' />
                    {!this.state.isLoggedIn && <button className='login-button' onClick={this.handleLoginClick}>Log In</button>}
                    {handleNavbarClass() === 'standard-nav' && this.state.isLoggedIn ? <Link to={handleNewQuoteLink()}>
                          <button className='new-quote-button-hamburger' onClick={this.handleCloseModal}>+ New Quote</button>
                        </Link> : null}
                    <ul>
                      {this.state.isLoggedIn ? <div>
                        <li>
                        History
                      </li>
                      <li>
                        Addresses
                      </li>
                      <li>
                        Agent Resources
                      </li>
                      </div> : null}
                      <li>
                        Make a Payment
                      </li>
                      <li>
                        Our Company
                      </li>
                      <li>
                        Contact Us
                      </li>
                      <li>
                        FAQs
                      </li>
                      <li>
                        In the Press
                      </li>
                      <li>
                        Claims
                      </li>
                    </ul>
                    {this.state.isLoggedIn && <button className='logout-button' onClick={this.handleLogoutClick}>Log Out</button>}
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