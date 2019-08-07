import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LoginControl from './login';
import {ReactComponent as Logo} from '../../assets/images/swyfft-wordmark-logo-multi.svg';
import {ReactComponent as ChevronDown} from '../../assets/images/chevron-down.svg';
import './navbar.scss';
import {Container} from 'react-bootstrap';

const options = [
    'Homeowners',
    <span>E&S Commercial Package <span className='states'>(FL, NY)</span></span>,
    <span>Commercial Package <span className='states'>(CA, IL, NY)</span></span>,
  ];

// NavBar Component
function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  function handleClose() {
    setAnchorEl(null);
  }

 function optionPath() {
    let path;
    switch (options[selectedIndex]) {
      case options[0]:
        path = '/';
        break;
      case options[1]:
        path = '/E&S-Commercial-Package';
        break;
      case options[2]:
        path = '/Commercial-Package';
        break;
      default: path = '/';
    }
    return path;
  }

  function getNavbarClass() {
    let navClass;
    optionPath() === '/' ? navClass = 'homeowners-nav' : navClass = 'commercial-nav';
    return navClass;
}

    return (
        <Container className={`navbar-container ${getNavbarClass()}`} fluid={true}>
            <nav className='navigation'>
              <Link to='/'><Logo alt='Swyfft Insurance' /></Link>
                  <Redirect push to={optionPath()} />
                      <div className='product-select'>
                          <List className='mobile-product-list'>
                              <ListItem
                              button
                              aria-haspopup="true"
                              onClick={handleClickListItem}
                              >
                              <ListItemText className='product-link' primary={options[selectedIndex]} />
                              <ChevronDown className='mobile-menu-chevron' />
                              </ListItem>
                          </List>
                          <Menu
                              id="lock-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                          >
                              {options.map((option, index) => (
                              <MenuItem
                                  key={option}
                                  selected={index === selectedIndex}
                                  onClick={event => handleMenuItemClick(event, index)}
                              >
                              {option}
                              </MenuItem>
                              ))}
                          </Menu>
                          <List className='desktop-product-list'>
                              {options.map((option, index) => (
                                  <ListItem
                                      className='product-link'
                                      key={option}
                                      selected={index === selectedIndex}
                                      onClick={event => handleListItemClick(event, index)}
                                  >
                                      {option}
                                  </ListItem>
                                  ))}
                          </List>
                      </div>
                <LoginControl />
            </nav>
        </Container>
    );
}

export default NavBar;