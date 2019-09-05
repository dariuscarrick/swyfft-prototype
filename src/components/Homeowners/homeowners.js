import React from 'react';
import './homeowners.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ReactComponent as Shield} from '../../assets/images/shield.svg';

export default function Homeowners() {
    return (
        <Container className='homeowners-container' fluid={true}>
            <Container>
                <Row>
                    <Col lg={1}>
                        <Shield className='shield' alt='Swyfft Insurance' />
                    </Col>
                    <Col lg={11}>
                        <h1 className='hero-text'>
                            <span className='first-line'>Unlike other brands that make you fill out endless forms, Swyfft uses unique data sources and proprietary analytics so you can</span> <span className='second-line'>get a homeowner insurance quote in seconds.</span> Just type your address:
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 8, offset: 1}} md={9}>
                        <input className='address-input' type='text' placeholder='Type your address' />
                    </Col>
                    <Col lg={3}>
                        <Link to='/Homeowners/Quote'>
                            <button className='get-quote'>Get Quote</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}