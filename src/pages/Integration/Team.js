import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

import steve from '../../assets/images/team/steve.jpeg';
import leonid from '../../assets/images/team/leonid.png';
import dino from '../../assets/images/team/dino.png';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function Team() {
  const candidatesArr = [
    {
      id: 1,
      image: steve,
      name: 'Steve Dakh',
      designation: 'Developer (Kryptokit/Jaxx, Rushwallet)',
      link: '',
      socialIds: [
        // { icon: 'facebook', link: '#' },
        // { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 2,
      image: leonid,
      name: 'Leonid Beder',
      designation: 'Developer, researcher, and DeFi enthusiast',
      link: '',
      socialIds: [
        // { icon: 'facebook', link: '#' },
        // { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 2,
      image: dino,
      name: 'Dino Mark',
      designation: 'Builder/Early Ethereum contributor',
      link: '',
      socialIds: [
        // { icon: 'facebook', link: '#' },
        // { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
  ];

  const candidates = shuffle(candidatesArr);

  return (
    <div>
      <section className="section">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title">Team</h4>
              </div>
            </Col>
          </Row>
          <Row>
            {/* teambox */}
            {candidates.map((candidate, key) => (
              <Col lg="4" md="6" key={key} className="mt-4 pt-2">
                <Card className="team text-center border-0">
                  <div className="position-relative">
                    <img
                      src={candidate.image}
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      {candidate.socialIds.map((id, key) => (
                        <li key={key} className="list-inline-item">
                          <Link to={id.link} className="rounded">
                            <i>
                              <FeatherIcon
                                icon={id.icon}
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CardBody className="py-3 px-0 content">
                    <h5 className="mb-0">
                      <Link to={candidate.link} className="name text-dark">
                        {candidate.name}
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      {candidate.designation}
                    </small>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
