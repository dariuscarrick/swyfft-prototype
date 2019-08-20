import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import LoginControl from './login';
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
import './navbar.scss';
import {Container} from 'react-bootstrap';

const options = [
    'Homeowners',
    'E&S Commercial',
    'Admitted Commercial',
  ];

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

// NavBar Component
const NavBar = props => {
  // Function to create the product list and handle selected state
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleListItemClick(index) {
    setSelectedIndex(index);
  }

  // Function to retrieve and render the path based on the selection
 function optionPath() {
    let path;
    switch (options[selectedIndex]) {
      case options[0]:
        path = '/Homeowners';
        break;
      case options[1]:
        path = '/E&S-Commercial-Package';
        break;
      case options[2]:
        path = '/Commercial-Package';
        break;
      default: path = '/Homeowners';
    }
    return path;
  }

    // Function to change navbar colors based on path
    function getNavbarClass() {
      let navClass;
      switch (props.location.pathname) {
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

    // function to set class name of product link dynamically
    function setProductClassName(option, index) {
      return `product-link ${index === selectedIndex ? 'selected' : ''} ${option.replace('&', '').replace( /\s/g, '').toLowerCase()}`
    }

    // Function to get the correct states to display on hover
    function getStates(option) {
      let statesAvailable;
      switch (option) {
        case 'Homeowners':
          statesAvailable = ['Alabama', 'California', 'Florida', 'Illinois', 'Massachusetts','New Jersey', 'New York', 'Texas'];
          break;
        case 'E&S Commercial':
          statesAvailable = ['Florida'];
          break;
        case 'Admitted Commercial':
          statesAvailable = ['Illinois', 'Florida'];
          break;
        default: statesAvailable = '';
      }
      return statesAvailable;
    }

    // Function to display dynamic product details
    function productDetails(option) {
      let productDetail;
      switch (option) {
        case 'Homeowners' :
            productDetail = 'Homeowners Insurance';
          break;
        case 'E&S Commercial' : 
            productDetail = 'E&S Commercial Package Insurance';
          break;
        case 'Admitted Commercial':
            productDetail = 'Admitted Commercial Package Insurance';
          break;
        default: productDetail = '';
      }
      return productDetail;
    }    

    return (
        <Container className={`navbar-container ${getNavbarClass()}`} fluid={true}>
            <nav className='navigation'>
                  {getNavbarClass() === 'homeowners-nav' || 'standard-nav' ? 
                    <MultiLogo alt='Swyfft Insurance'  /> :
                    <WhiteLogo alt='Swyfft Insurance'  /> 
                  }
                  <Redirect push to={optionPath()} />
                      <div className='product-select'>
                          <div className='product-list'>
                              {options.map((option, index) => (
                                  <div
                                      className={setProductClassName(option, index)}
                                      key={index}
                                      onClick={() => {handleListItemClick(index)}}
                                  >
                                      {option}
                                      <div id='statesContainer' className='homeowners-states es-commercial-states admitted-commercial-states'>
                                          <div className='product-detail'>{productDetails(option)}</div>
                                          <div className='states'>
                                            {getStates(option).map((state) => <div className='state-instance' key={state}>
                                              <StateSvg state={state.replace( /\s/g, '')} />
                                              <span>{state}</span>
                                            </div>)}
                                          </div>
                                      </div>
                                  </div>
                                  ))}
                          </div>
                      </div>
                <LoginControl />
            </nav>
        </Container>
    );
}

export default withRouter(NavBar);