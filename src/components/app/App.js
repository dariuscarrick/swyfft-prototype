import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import './App.scss';
import NavBar from '../navbar/navbar';
import Homeowners from '../homeowners/homeowners';
import HomeownersQuote from '../quote/homeowners-quote';
import ESCommercial from '../commercial/es-commercial/escommercial';
import ESCommercialQuote from '../quote/es-commercial-quote';
import AdmittedCommercial from '../commercial/admitted-commercial/admitted-commercial';
import AdmittedCommercialQuote from '../quote/admitted-commercial-quote';

class App extends React.Component {

  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <Redirect exact from='/' to={path} />
        <NavBar />
        <Route path='/Homeowners' component={Homeowners} exact={true}/>
        <Route path='/Homeowners/Quote' component={HomeownersQuote} exact={true} />
        <Route path='/E&S-Commercial-Package' component={ESCommercial} exact={true}/>
        <Route path='/E&S-Commercial-Package/Quote' component={ESCommercialQuote} exact={true}/>
        <Route path='/Commercial-Package' component={AdmittedCommercial} exact={true} />
        <Route path='/Commercial-Package/Quote' component={AdmittedCommercialQuote} exact={true} />
    </div>
    );
  }
}

export default withRouter(App);