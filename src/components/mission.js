/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Row, Alert,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mission.css';

const Mission = ({ mission }) => {
  const { mission_name, description } = mission;
  return (
    <Row className="ps-2 mission">
      <Col className="col-3 column">
        <h4>{mission_name}</h4>
      </Col>
      <Col className="col-6 column">
        <p>{description}</p>
      </Col>
      <Col className="d-flex align-items-center justify-content-center column">
        <Alert variant="secondary" className="p-1">Active Member</Alert>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <Button variant="danger">Join Mission</Button>
      </Col>
    </Row>

  );
};

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
};

export default Mission;
