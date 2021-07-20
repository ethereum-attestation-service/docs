import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
//Import Icons
import FeatherIcon from 'feather-icons-react';

import integration from '../../assets/images/integration/eas-2.png';

export default class Websites extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6} className="order-1 order-md-2">
              <img src={integration} className="img-fluid" alt="" />
            </Col>

            <Col
              lg={7}
              md={6}
              className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <div className="section-title me-lg-5">
                <h4 className="title mb-4">
                  Lorem ipsum dolor sit
                  <br /> amet, consectetur adipisicing
                </h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ipsum iste iure laboriosam magni, quibusdam sequi totam!
                  Assumenda facilis illum iste iusto! Accusamus aspernatur
                  dolorum eveniet exercitationem, illum neque omnis?
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Read More{' '}
                    <i>
                      <FeatherIcon icon="arrow-right" className="fea icon-sm" />{' '}
                    </i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}