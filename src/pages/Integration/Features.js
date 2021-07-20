import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

export default class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={6}>
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-user-square d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Self-sovereign ID
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        People can all attest to the reputation of each other
                        while attestation explorers can provide reputation
                        scores.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-game-structure d-block rounded h3 mb-0"></i>
                      {/*<i className='d-block rounded h3 mb-0'>*/}
                      {/*  <FeatherIcon icon='arrow-right' className='fea icon-sm' />{' '}*/}
                      {/*</i>*/}
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Ratings & Trust
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        Now you can take your trust with you! Just sign into any
                        web3 app and your trusted ratings follow you!
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mt-4 pt-2">
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-shield-check d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Tamper-proof Voting
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        User can make vote for a party member or proposal using
                        an attestation type for voting.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mt-4 pt-2">
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-building d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        KYC Providers
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        KYC providers can attest that an ETH address has passed
                        various thresholds of identity and background checks.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
