import React from 'react';
import PropTypes from 'prop-types';
import { DIRECTIONS } from '../constants';

const Robot = (props) => {
  let rotateDeg;
  if (DIRECTIONS[props.direction]) {
    rotateDeg = DIRECTIONS[props.direction].rotate;
  }

  return (
    <div id={props.id} className="robot" style={{ transform: 'rotate(' + rotateDeg + 'deg)' }}>
      <span className="head"/>
      <span className="body"/>
      <span className="foot"/>
    </div>
  )
};

Robot.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.string
};

Robot.defaultProp = {
  direction: 0
};

export default Robot;