import GET_HEROES from '../actions/actionTypes';

const INITIAL_STATE = {
  heroes: [],
}

const heroesList = (state = INITIAL_STATE, { type, heroes }) => {
  switch (type) {
  case GET_HEROES:
    return {
      ...state,
      heroes,
    };
  default:
    return state;
  } 
}

export default heroesList;
