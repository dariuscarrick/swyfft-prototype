import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './careers.scss';
import {ReactComponent as ShieldLogo} from '../../assets/images/shield.svg';
import {ReactComponent as CareersIllustration} from '../../assets/images/careers-illustration.svg';

export default class Careers extends React.Component {

    render() {
        return (
            <main>
                <section id='swyfft-come-work-with-us'>
                    <Container fluid={true} className='careers-hero'>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                <ShieldLogo />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                <h1>Come Work With Us</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 6, offset: 3}}>
                                <h3>As a group of self-motivated innovators, we are looking for team members who offer innovative technical knowledge and insurance industry experience to challenge the old way of doing insurance business.</h3>
                            </Col>
                        </Row>
                        <CareersIllustration className='careers-illustration' alt='Careers at Swyfft Insurance' />
                    </Container>
                </section>
                <section id='swyfft-job-listings'>
                    <Container fluid={true} className='careers-job-listings'>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                <h2>Current Openings</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                <div class="BambooHR-ATS-board">
                                    <h2>Open Positions</h2>
                                    <ul class="BambooHR-ATS-Department-List">
                                        <li id="bhrDepartmentID_18439" class="BambooHR-ATS-Department-Item">
                                            <div id="department_18439"class="BambooHR-ATS-Department-Header">Customer Support</div>
                                            <ul class="BambooHR-ATS-Jobs-List">
                                                <li id="bhrPositionID_28" class="BambooHR-ATS-Jobs-Item">
                                                    <a href="//swyfft.bamboohr.com/jobs/view.php?id=28">Customer Service Supervisor</a>
                                                    <span class="BambooHR-ATS-Location">Jacksonville, Florida</span>
                                                </li>
                                                <li id="bhrPositionID_28" class="BambooHR-ATS-Jobs-Item">
                                                    <a href="//swyfft.bamboohr.com/jobs/view.php?id=28">Lead Poetry Analyst</a>
                                                    <span class="BambooHR-ATS-Location">Jacksonville, Florida</span>
                                                </li>
                                                <li id="bhrPositionID_28" class="BambooHR-ATS-Jobs-Item">
                                                    <a href="//swyfft.bamboohr.com/jobs/view.php?id=28">Bilbo Baggins Look-alike</a>
                                                    <span class="BambooHR-ATS-Location">Morristown, New Jersey</span>
                                                </li>
                                                <li id="bhrPositionID_28" class="BambooHR-ATS-Jobs-Item">
                                                    <a href="//swyfft.bamboohr.com/jobs/view.php?id=28">Senior iOS Developer</a>
                                                    <span class="BambooHR-ATS-Location">Redmond, WA</span>
                                                </li>
                                                <li id="bhrPositionID_28" class="BambooHR-ATS-Jobs-Item">
                                                    <a href="//swyfft.bamboohr.com/jobs/view.php?id=28">Junior Software Developer</a>
                                                    <span class="BambooHR-ATS-Location">Redmond, WA</span>
                                                </li>
                                                <li id="bhrPositionID_28" class="BambooHR-ATS-Jobs-Item">
                                                    <a href="//swyfft.bamboohr.com/jobs/view.php?id=28">Claims Manager</a>
                                                    <span class="BambooHR-ATS-Location">Morristown, NJ</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id='swyfft-benefits'>
                    <Container className='benefits' fluid={true}>

                    </Container>
                </section>
            </main>
        )
    }
}