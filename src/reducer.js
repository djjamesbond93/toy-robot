import {
  DEFAULT_DIRECTION, DIRECTION_EAST,
  DIRECTION_NORTH, DIRECTION_SOUTH, DIRECTION_WEST,
  MOVE,
  PLACE,
  ROTATE, SET_TABLE_SIZE
} from './constants';

const initialState = {
  x: null,
  y: null,
  direction: DEFAULT_DIRECTION,
  maxX: 0,
  maxY: 0,
};

const moveRobot = (state, step = 1) => {
  let newX = state.x;
  let newY = state.y;
  console.log(state);

  // increase step for axis by direction
  switch (state.direction) {
    case DIRECTION_NORTH:
      newX -= step;
      break;
    case DIRECTION_EAST:
      newY += step;
      break;
    case DIRECTION_SOUTH:
      newX += step;
      break;
    case DIRECTION_WEST:
      newY -= step;
      break;
    default:
      break;
  }

  // handle for axisX border
  if (newX > state.maxX) {
    newX = state.maxX
  } else if (newX < 0) {
    newX = 0;
  }

  // handle axisY border
  if (newY > state.maxY) {
    newY = state.maxY
  } else if (newY < 0) {
    newY = 0
  }

  return {
    x: newX,
    y: newY,
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_SIZE:
      return {
        ...state,
        maxX: action.maxX,
        maxY: action.maxY,
      };
    case PLACE:
      return {
        ...state,
        x: action.x,
        y: action.y,
        direction: action.direction,
      };
    case ROTATE:
      return {
        ...state,
        direction: action.direction,
      };
    case MOVE:
      return {
        ...state,
        ...moveRobot(state, action.step),
      }
    default:
      return state;
  }
};

export default appReducer;