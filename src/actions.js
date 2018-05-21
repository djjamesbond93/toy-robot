import {
  MOVE,
  PLACE,
  ROTATE,
  DIRECTIONS,
  SET_TABLE_SIZE,
  SAVE,
} from './constants';

function place(x, y, f) {
  const errorStack = [];
  if (isNaN(x)) {
    errorStack.push('x should be number');
  }

  if (isNaN(y)) {
    errorStack.push('y should be number');
  }

  // calculate direction
  const direction = DIRECTIONS.findIndex((item) => item.name === f);
  if (direction === -1) {
    errorStack.push('f should be NORTH, EAST, SOUTH, WEST');
  }

  if (errorStack.length > 0) {
    // have error with place data
    alert(errorStack.join('\n'));
  } else {
    return {
      type: PLACE,
      direction,
      x, y
    }
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
    direction: newDirection >= DIRECTIONS.length ? 0 : newDirection,
  }
}

function setTableSize(column, row) {
  return {
    type: SET_TABLE_SIZE,
    maxX: row - 1,
    maxY: column - 1,
  }
}

function save() {
  return {
    type: SAVE,
  }
}


export {
  place,
  move,
  rotateLeft,
  rotateRight,
  setTableSize,
  save
}