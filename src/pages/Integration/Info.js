import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

export default class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{marginTop: 40}}>
          <Row className="justify-content-left">
            <h3>Introduction</h3>
            <p>The Ethereum Attestation Service is a free and open protocol for on-chain attestations on EVM compatible blockchains. It is a generalized service that allows anyone to register a schema for their particular use case, and then make attestations following their schema.</p>

            <p>Schemas can be registered using the Schema.sol contract, and attestations are made using the EAS.sol contract.</p>

            <p>In addition, we provide a resolver contract for advanced use cases, such as on-chain verification of attestation data, and also attaching payments to attestations (which makes a new suite of powerful web3 applications possible)</p>

            <p>We also provide an SDK for developers.</p>

            <p>On-chain attestations will enable a powerful new range of web3 applications, including:</p>

            <ul style={{marginLeft: 24}}>
              <li>Identity</li>
              <li>Trust Scores</li>
              <li>Goodness ScoresCredit Scores</li>
              <li>Clout</li>
              <li>Land Registries</li>
              <li>Social Networks</li>
              <li>Portable Trust Layers</li>
              <li>Retroactive Public Goods Funding</li>
              <li>KYC Services</li>
              <li>Uncollateralized Lending / Borrowing</li>
              <li>Voting</li>
              <li>Oracles (who can be atomically paid for making attestations inside the protocol)</li>
              <li>Likes/Dislikes</li>
              <li>Content Filtering</li>
              <li>And many more!</li>
            </ul>

          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
