import {
  CREATOR,
  DEFAULT_DIRECTION, DIRECTION_EAST,
  DIRECTION_NORTH, DIRECTION_SOUTH, DIRECTION_WEST, DIRECTIONS,
  MOVE,
  PLACE,
  ROTATE, SET_TABLE_SIZE,
  SAVE, SAVE_METHOD, SAVE_URL
} from './constants';

const initialState = {
  x: 0,
  y: 0,
  direction: DEFAULT_DIRECTION,
  maxX: 0,
  maxY: 0,
  logs: [],
};

const moveRobot = (state, step = 1) => {
  let newX = state.x;
  let newY = state.y;

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

const pushLog = (state, actionType) => {
  if ([PLACE, ROTATE, MOVE].indexOf(actionType) !== -1 ) { // only log with PLACE, ROTATE and MOVE
    state.logs.push({
      action: actionType,
      value: `${state.x},${state.y},${DIRECTIONS[state.direction].name}`,
      creator: CREATOR,
    });
  }
};
const saveLog = (logs) => {
  fetch(SAVE_URL, {
    'method': SAVE_METHOD,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      email: 'dung.nd.dev@gmail.com',
    },
    body: JSON.stringify(logs),
  })
    .then(() => alert('Save success'))
    .catch((error) => alert('Have error when save: ' + error.message))

};

const appReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case SET_TABLE_SIZE:
      newState.maxX = action.maxX;
      newState.maxY = action.maxY;
      break;
    case PLACE:
      newState.x = action.x;
      newState.y = action.y;
      newState.direction = action.direction;
      newState.logs = []; // reset the log (put new session)
      break;
    case ROTATE:
      newState.direction = action.direction;
      break;
    case MOVE:
      const newPosition = moveRobot(newState, action.step);
      newState.x = newPosition.x;
      newState.y = newPosition.y;
      break;
    case SAVE:
      saveLog(newState.logs);
      break;
    default:
      return state;
  }

  pushLog(newState, action.type);

  return newState;
};

export default appReducer;