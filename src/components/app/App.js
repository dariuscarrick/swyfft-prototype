import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import NavBar from '../navbar/navbar';
import Homeowners from '../homeowners/homeowners';
import ESCommercial from '../es-commercial/escommercial';
import AdmittedCommercial from '../admitted-commercial/admitted-commercial';

function App() {
  return (
    <div>
      <NavBar navbarClass='' />
      <Route path='/' component={Homeowners} exact={true}/>
      <Route path='/E&S-Commercial-Package' component={ESCommercial} exact={true}/>
      <Route path='/Commercial-Package' component={AdmittedCommercial} exact={true} />
    </div>
  );
}

export default App;