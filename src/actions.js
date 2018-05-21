import {
  MOVE,
  PLACE,
  ROTATE,
  DIRECTIONS, SET_TABLE_SIZE,
} from './constants';

function place(x, y, f) {
  return {
    type: PLACE,
    direction: f,
    x, y
  }
}

function move(step) {
  return {
    type: MOVE,
    step: 1,
  }
}

function rotateLeft(from) {
  const newDirection = from - 1;
  return {
    type: ROTATE,
    direction: newDirection < 0 ? DIRECTIONS.length - 1 : newDirection,
  }
}

function rotateRight(from) {
  const newDirection = from + 1;
  return {
    type: ROTATE,
    direction: newDirection >= DIRECTIONS.length ?  0 : newDirection,
  }
}

function setTableSize(column, row) {
  console.log(column, row);
  return {
    type: SET_TABLE_SIZE,
    maxX: row - 1,
    maxY: column - 1,
  }
}


export {
  place,
  move,
  rotateLeft,
  rotateRight,
  setTableSize
}