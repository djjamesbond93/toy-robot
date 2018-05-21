import React from 'react';
import PropTypes from 'prop-types';
import { DIRECTIONS } from '../constants';

const Robot = (props) => {
  let rotateDeg;
  if (DIRECTIONS[props.direction]) {
    rotateDeg = DIRECTIONS[props.direction].rotate;
  }

  const style = {
    ...props.position,
    transform: 'rotate(' + rotateDeg + 'deg)',
    width: props.size,
    height: props.size,
  };

  return (
    <div id={props.id} className="robot" style={style}>
      <span className="head"/>
      <span className="body"/>
      <span className="foot"/>
    </div>
  )
};

Robot.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.number
};

Robot.defaultProp = {
  direction: 0
};

export default Robot;