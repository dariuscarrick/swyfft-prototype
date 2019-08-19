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
                                placeholderText='Select an Option...'
                                options={['Apartment Building Owners/Operations', 
                                'Apartment Building Owners/Operations (with retail)', 
                                'Residential Condo Associations',
                                'Residential Condo Associations (with retail)',
                                'Office/Professional Building Owners (Lessors Only)',
                                'Retail/Shopping Center Owners (Lessors Only)'
                                ]}
                            />
                        </Col>
                        <Col lg={2}>
                            <TextField
                                onColor={true}
                                labelText='Year Built'
                            />
                        </Col>
                        <Col lg={1}>
                            <TextField
                                onColor={true}
                                labelText='# Buildings'
                            />
                        </Col>
                        <Col lg={1}>
                            <TextField
                                onColor={true}
                                labelText='# Stories'
                            />
                        </Col>
                        <Col lg={1}>
                            <TextField
                                onColor={true}
                                labelText='# Units'
                            />
                        </Col>
                        <Col lg={1}>
                            <TextField
                                onColor={true}
                                labelText='Sq. Footage'
                            />
                        </Col>
                        <Col lg={2}>
                            <Select
                                onColor={true}
                                labelText='Swimming Pools'
                                placeholderText='Select #...'
                                options={['0','1','2','3','4']}                          
                            />
                        </Col>
                        <Col lg={4}>
                            <Select
                                onColor={true}
                                labelText='Construction Type'
                                placeholderText='Select an Option...'
                                options={['Frame', 
                                'Joisted Masonry', 
                                'Non-combustible',
                                'Masonry Non-Combustible',
                                'Modified Fire Resistive',
                                'Fire Resistive'
                                ]}
                            />
                        </Col>
                        <Col lg={2}>
                            <TextField
                                onColor={true}
                                labelText='Building Value'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col lg={2}>
                            <TextField
                                onColor={true}
                                labelText='Bus. Personal Property'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col lg={2}>
                            <TextField
                                onColor={true}
                                labelText='Bus. Income Limit'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col lg={2}>
                            <Select
                                onColor={true}
                                labelText='General Liability'
                                placeholderText='Select Coverage...'
                                options={['$1MM/$2MM','No Coverage']}
                            />
                        </Col>
                        <Col lg={2}>
                            <TextField
                                onColor={true}
                                labelText='Target Premium'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col lg={2}>
                            <div className='ex-wind-checkbox'>
                                <span className='checkbox'></span> Exclude Wind/Hail
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 3, offset: 9 }}>
                            <button className='get-quote-button'>Get Quote</button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    } 
}