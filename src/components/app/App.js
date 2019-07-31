import React from 'react';
import NavBar from '../navbar/navbar'

// Bootstrap Import
import {Container} from 'react-bootstrap';

// Main scss file
import './App.scss';

function App() {
  return (
    <Container fluid={true}>
          <NavBar />
    </Container>
  );
}

export default App;