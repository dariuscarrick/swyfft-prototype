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
                        <Col xl={8} lg={8} md={12}>
                            <TextField
                                onColor={true}
                                labelText='Building Address'
                                placeholderText='Enter Building Address'
                            />
                        </Col>
                        <Col xl={4} lg={4} md={4}>
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
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='Year Built'
                            />
                        </Col>
                        <Col xl={1} lg={2} md={2} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='# Buildings'
                            />
                        </Col>
                        <Col xl={1} lg={2} md={2} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='# Stories'
                            />
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='Sq. Footage'
                            />
                        </Col>
                        <Col xl={2} lg={2} md={3}>
                            <Select
                                onColor={true}
                                labelText='Swimming Pools'
                                placeholderText='Select #...'
                                options={['0','1','2','3','4']}                          
                            />
                        </Col>
                        <Col xl={4} lg={2} md={3}>
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
                        <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='Building Value'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='Bus. Personal Property'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='Bus. Income Limit'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                            <Select
                                onColor={true}
                                labelText='General Liability'
                                placeholderText='Select Coverage...'
                                options={['$1MM/$2MM','No Coverage']}
                            />
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                            <TextField
                                onColor={true}
                                labelText='Target Premium'
                                placeholderText='$'                        
                            />
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                            <div className='ex-wind-checkbox'>
                                <span className='checkbox'></span> Exclude Wind/Hail
                            </div>
                        </Col>
                        <Col xl={{ span: 2, offset: 10 }} lg={{ span: 3, offset: 9}} md={{ span: 4, offset: 8}}>
                            <button className='get-quote-button'>Get Quote</button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    } 
}