import { GET_HEROES, SEARCH_HEROES } from '../actions/actionTypes';

const INITIAL_STATE = {
  heroes: [],
  searchHeroes: [],
}

const heroesList = (state = INITIAL_STATE, { type, heroes, heroName }) => {
  switch (type) {
  case GET_HEROES:
    return {
      ...state,
      heroes,
    };
  case SEARCH_HEROES:
    return {
      ...state,
      searchHeroes: state.heroes.filter((current) => {
        return current.name.toLowerCase().includes(heroName.toLowerCase());
      }),
    }
  default:
    return state;
  } 
}

export default heroesList;
