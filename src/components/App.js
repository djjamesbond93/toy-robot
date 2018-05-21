import React from 'react';
import { connect } from 'react-redux'

import Button from './Button';

import Table from './Table';

import { place, rotateLeft, rotateRight, move, save } from '../actions';

const App = (props) => {
  return (
    <div>
      <Table/>
      <div className="commands">
        <h2 className="commands-title">Command</h2>
        <Button onClick={() => props.place()}>PLACE</Button>
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
  place: () => {
    try {
      const placeString = prompt('Enter the position robot will place (format: x,y,f)');
      const [x, y, f] = placeString.split(',');

      return dispatch(place(
        parseInt(x, 10),
        parseInt(y, 10),
        f
      ));
    } catch (error) {
      alert('Error when put place. Try again');
      console.log(error);
    }
  },
  rotateLeft: (from) => dispatch(rotateLeft(from)),
  rotateRight: (from) => dispatch(rotateRight(from)),
  move: () => dispatch(move(1)),
  save: () => dispatch(save()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);