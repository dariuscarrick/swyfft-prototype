import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import './App.scss';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';
import Homeowners from '../homeowners/homeowners';
import HomeownersQuote from '../quote/homeowners-quote';
import ESCommercial from '../commercial/es-commercial/escommercial';
import ESCommercialQuote from '../quote/es-commercial-quote';
import AdmittedCommercial from '../commercial/admitted-commercial/admitted-commercial';
import AdmittedCommercialQuote from '../quote/admitted-commercial-quote';
import Careers from '../careers/careers';

class App extends React.Component {

  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <Redirect exact from='/' to={path === '/' ? '/Homeowners' : path} />
        <NavBar />
        <Route path='/Homeowners' component={Homeowners} exact={true}/>
        <Route path='/Homeowners/Quote' component={HomeownersQuote} exact={true} />
        <Route path='/E&S-Commercial-Package' component={ESCommercial} exact={true}/>
        <Route path='/E&S-Commercial-Package/Quote' component={ESCommercialQuote} exact={true}/>
        <Route path='/Commercial-Package' component={AdmittedCommercial} exact={true} />
        <Route path='/Commercial-Package/Quote' component={AdmittedCommercialQuote} exact={true} />
        <Route path='/Careers' component={Careers} exact={true} />
        <Footer />
    </div>
    );
  }
}

export default withRouter(App);