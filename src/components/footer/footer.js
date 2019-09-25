import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.scss';
import {ReactComponent as Shield} from '../../assets/images/shield.svg';
import {ReactComponent as Facebook} from '../../assets/images/facebook.svg';
import {ReactComponent as LinkedIn} from '../../assets/images/linkedin.svg';
import {ReactComponent as Twitter} from '../../assets/images/twitter.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <Container fluid={true}>
                    <Row>
                        <Col lg={1} className='shield-logo'>
                            <Shield />
                        </Col>
                        <Col lg={10} className='footer-links-col'>
                            <div className='footer-link-lists-container'>
                                <ul className='footer-link-list'>
                                    <li>Swyfft</li>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>In the Press</li>
                                    <li>FAQs</li>
                                </ul>
                                <ul className='footer-link-list'>
                                    <li>Manage My Policy</li>
                                    <li>Make a Payment</li>
                                    <li>Get a Copy of My Policy</li>
                                    <li>Change My Address</li>
                                    <li>Change Mortgage Info</li>
                                </ul>
                                <ul className='footer-link-list'>
                                    <li>Contact</li>
                                    <li>Contact Us</li>
                                    <li>New Agent Signup</li>
                                    <li>Email Cutsomer Support</li>
                                    <li>1.855.479.9338</li>
                                </ul>
                                <ul className='footer-link-list'>
                                    <li>Claims</li>
                                    <li>Report a Claim</li>
                                    <li>1.855.479.9338</li>
                                </ul>
                                <ul className='footer-link-list'>
                                    <li>Follow Us</li>
                                    <ul className='social-media-links'>
                                        <li><a href='https://www.facebook.com/Swyfft/'><Facebook alt='follow swyfft on facebook' /></a></li>
                                        <li><a href='https://www.linkedin.com/company/swyfft'><LinkedIn alt='follow swyfft on linkedin' /></a></li>
                                        <li><a href='https://twitter.com/swyfft_insures'><Twitter alt='follow swyfft on twitter' /></a></li>
                                    </ul>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p className='copyright-line'>© 2019 Swyfft® , LLC. All Rights Reserved. <a href='#'>Terms</a> • <a href='#'>Privacy Policy</a></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;