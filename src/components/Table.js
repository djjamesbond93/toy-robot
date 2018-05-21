import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Robot from './Robot';
import { setTableSize } from '../actions';

const Table = (props) => {
  const width = window.innerWidth - 130;
  const height = window.innerHeight;

  // calculate column and row
  const column = Math.floor(width / props.size);
  const row = Math.floor(height / props.size);
  props.setTableSize(column, row);

  // calculate the position of robot
  const robotPosition = {
    top: props.x * props.size,
    left: props.y * props.size,
  };

  return (
    <div className="table-grid">
      {
        Array(column * row).fill(0).map(() => (
          <div className="table-cell" style={{ width: props.size, height: props.size }}/>
        ))
      }
      <Robot id="robot-x" direction={props.direction} size={props.size} position={robotPosition}/>
    </div>
  );
};

Table.propTypes = {
  size: PropTypes.number,
};
Table.defaultProps = {
  size: 100,
};

const mapStateToProps = (state) => {
  return ({
    x: state.x,
    y: state.y,
    direction: state.direction,
  });
};

const mapDispatchToProps = (dispatch) => ({
  setTableSize: (column, row) => dispatch(setTableSize(column, row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);