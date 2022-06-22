/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

import './opportunities.css';

const Opportunities = ({
  html,
}) => (
  <section
    className="opportunities"
    id="cel"
  >
    <h2>
      <FontAwesomeIcon icon={faUserFriends} />
      Наша цель
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
);

Opportunities.propTypes = {
  html: PropTypes.node.isRequired,
};

export default Opportunities;
