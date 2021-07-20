import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// import Images
import amico from '../../assets/images/integration/interactiondesign-amico.svg';
import job1 from '../../assets/images/job/Circleci.svg';
import job2 from '../../assets/images/job/Codepen.svg';
import job3 from '../../assets/images/job/Discord.svg';
import job4 from '../../assets/images/job/Eslint.svg';

export default class Tools extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <img src={amico} className="img-fluid" alt="" />
            </Col>

            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">Integrate EAS into your project</h4>

                <h5>
                  <i className="uil uil-arrow-circle-right text-primary me-1"></i>{' '}
                  Access control
                </h5>
                <p className="text-muted para-desc ms-4 ps-2">
                  Attestations granting/revoking access to users can be made on
                  EAS which can later be used for authentication.
                </p>
                <h5>
                  <i className="uil uil-arrow-circle-right text-primary me-1"></i>{' '}
                  Governance
                </h5>
                <p className="text-muted para-desc ms-4 ps-2">
                  Attestations representing proposals and votes can be made on
                  top of EAS rather than having to build complex custom
                  solutions.
                </p>
                <h5>
                  <i className="uil uil-arrow-circle-right text-primary me-1"></i>{' '}
                  Invent your own attestation types
                </h5>
                <p className="text-muted para-desc ms-4 ps-2">
                  Make an attestation type for book ratings or for attesting to
                  the reputation of an AI. The possibilities are endless.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job1} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">CircleCi</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job2} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">Codepen</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </Col>

            <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job3} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">Discord</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job4} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">Eslint</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
