import React from 'react';
import { connect } from 'react-redux'

import Button from './Button';

import Table from './Table';

import { place, rotateLeft, rotateRight, move } from '../actions';

const App = (props) => {
  return (
    <div>
      <Table/>
      <div className="commands">
        <h2 className="commands-title">Command</h2>
        <Button onClick={() => props.showPlaceBox()}>PLACE</Button>
        <Button onClick={() => props.move()}>MOVE</Button>
        <Button onClick={() => props.rotateLeft(props.direction)}>LEFT</Button>
        <Button onClick={() => props.rotateRight(props.direction)}>RIGHT</Button>
        <Button onClick={() => props.save()}>SAVE</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    direction: state.direction,
    column: state.column,
    row: state.row,
  });
};

const mapDispatchToProps = (dispatch) => ({
  showPlaceBox: () => dispatch(place(1, 2, 2)),
  rotateLeft: (from) => dispatch(rotateLeft(from)),
  rotateRight: (from) => dispatch(rotateRight(from)),
  move: () => dispatch(move(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);