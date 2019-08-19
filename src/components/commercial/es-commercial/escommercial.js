import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {TextField, Select} from '../../forms/forms';
import '../commercial.scss';

export default class ESCommercial extends React.Component {
    render() {
        return (
            <Container fluid={true} className='commercial-hero'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>
                                <span className='hero-text-gradient'>Using proprietary data and analytics, Swyfft can help you</span>
                                <span className='hero-text-gradient'>get E&S commercial package insurance in under a minute.</span>
                                <span className='hero-text-gradient'>Just fill out this form:</span>
                            </h1>
                        </Col>
                        <Col lg={8}>
                            <TextField
                                onColor={true}
                                labelText='Building Address'
                                placeholderText='Enter Building Address'
                            />
                        </Col>
                        <Col lg={4}>
                            <Select
                                onColor={true}
                                labelText='Occupancy'
                                placeholderText='Select an Option'
                                options={['Apartment Building Owners/Operations', 
                                'Apartment Building Owners/Operations (with retail)', 
                                'Residential Condo Associations',
                                'Residential Condo Associations (with retail)',
                                'Office/Professional Building Owners (Lessors Only)',
                                'Retail/Shopping Center Owners (Lessors Only)'
                                ]}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    } 
}