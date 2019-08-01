import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import NavBar from '../navbar/navbar';
import Homeowners from '../Homeowners/homeowners';
import ESCommercial from '../ES Commercial/escommercial';


function App() {
  return (
    <div>
      <NavBar />
      <Route path='/' component={Homeowners} exact={true}/>
      <Route path='/E&S-Commercial-Package' component={ESCommercial} exact={true}/>
    </div>
  );
}

export default App;