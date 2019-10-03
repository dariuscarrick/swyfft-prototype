import React from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'react-bootstrap';
import {AboveGridXs, GridXs} from '../component-assets/media-queries/media-queries';
import './careers.scss';
import {ReactComponent as ShieldLogo} from '../../assets/images/shield.svg';
import CareersIllustration from '../../assets/images/careers-illustration.png';
import CareersIllustrationMobile from '../../assets/images/careers-illustration-mobile.png';
// import {ReactComponent as Resume} from '../../assets/images/resume.svg';
import {ReactComponent as Health} from '../../assets/images/health-coverage.svg';
import {ReactComponent as Retirement} from '../../assets/images/401k.svg';
import {ReactComponent as PTO} from '../../assets/images/pto.svg';
import {ReactComponent as PetInsurance} from '../../assets/images/pet-insurance.svg';
import {ReactComponent as Compensation} from '../../assets/images/compensation.svg';
import {ReactComponent as RemoteWork} from '../../assets/images/remote-work.svg';
import {ReactComponent as EmployeeMap} from '../../assets/images/employee-map.svg';

export default class Careers extends React.Component {

    render() {

        return (
            <main>
                <Helmet>
                    <script src='https://swyfft.bamboohr.com/js/jobs2.php' type='text/javascript'></script>
                </Helmet>
                <section id='swyfft-come-work-with-us'>
                    <Container fluid={true} className='careers-hero'>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 6, offset: 3}}>
                                <ShieldLogo />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 6, offset: 3}}>
                                <h3>Let's Shake Things Up</h3>
                                <h1>Come Work With Us</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 6, offset: 3}}>
                                <h2>Through a mix of big data, human ingenuity and imagination, our team is transforming the way people experience insurance. We’re looking for like-minded, self-motivated innovators to join us as we challenge the old way of doing business.</h2>
                            </Col>
                        </Row>
                        <AboveGridXs>
                            <img className='careers-illustration' alt='Careers at Swyfft Insurance' src={CareersIllustration} />
                        </AboveGridXs>
                        <GridXs>
                            <img className='careers-illustration' alt='Careers at Swyfft Insurance' src={CareersIllustrationMobile} />
                        </GridXs>
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
                                <div id='BambooHR-ATS'></div>
                                
                                {/* TODO: Remove once script is verified

                                    <div class="BambooHR-ATS-board">
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
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* TODO - remove when verified
                <section id='open-application' className='careers-open-application'>
                    <Container fluid={true}>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className='open-app-container'>
                                <Resume />
                                <aside className='open-app-actions'>
                                    <h2>Don't See Your Role?</h2>
                                    <p>Send us your resume and we’ll save it for when the perfect position comes up.</p>
                                    <button className='apply-button'>Apply Now</button>
                                </aside>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
                <section id='swyfft-benefits'>
                    <Container className='benefits' fluid={true}>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                <h2>Benefits & Perks</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className='benefits-container'>
                                <article className='benefit-container'>
                                    <Health />
                                    <div className='benefit-text'>
                                        <h3>Health Coverage</h3>
                                        <p>Keeping our employees and families healthy is important to us. We offer a choice of two medical plans and cover a generous portion of the cost.</p>
                                    </div>
                                </article>

                                <article className='benefit-container'>
                                    <Retirement />
                                    <div className='benefit-text'>
                                        <h3>Retirement Plan</h3>
                                        <p>Our 401(k) offering is tough to beat. We offer a generous company match with immediate vesting and no per paycheck limits on how much you contribute.</p>
                                    </div>
                                </article>

                                <article className='benefit-container'>
                                    <PTO />
                                    <div className='benefit-text'>
                                        <h3>Paid Time Off</h3>
                                        <p>We understand that work life balance is important, so we provide a generous PTO policy, eleven paid holidays and a "choose your own adventure" day.</p>  
                                    </div>                                    
                                </article>

                                <article className='benefit-container'>
                                    <PetInsurance />
                                    <div className='benefit-text'>
                                        <h3>Pet Insurance</h3>
                                        <p>We know that your fur babies are important family members too, so we offer discounted rates on pet insurance.</p>
                                    </div>
                                </article>

                                <article className='benefit-container'>
                                    <Compensation />
                                    <div className='benefit-text'>
                                        <h3>Competitive Compensation</h3>
                                        <p>We’re proud to offer our employees salaries that compete with leading companies in our industry.</p>
                                    </div>
                                </article>

                                <article className='benefit-container'>
                                    <RemoteWork />
                                    <div className='benefit-text'>
                                        <h3>Remote Work Options</h3>
                                        <p>One third of our company works remotely. Depending on what your job is a remote work options might be available. </p>
                                    </div>
                                </article>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id='employee-locations'>
                    <Container className='locations' fluid={true}>
                        <Row>
                            <Col sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}} className='employee-location-container'>
                                <div className='employee-location-text'>
                                    <h2>Where We Work</h2>
                                    <p>We bring in a wide range of talented individuals from various locations to help us make insurance better.</p>
                                    <div className='map-legend'><span></span> <p>Swyfft employee states</p></div>
                                </div>
                                <EmployeeMap />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}