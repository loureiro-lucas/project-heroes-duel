import GET_HEROES from './actionTypes';
import { fetchHeroes } from '../services';

const getHeroesAction = (heroes) => ({
  type: GET_HEROES,
  heroes,
});

const fetchHeroesAction = () => (
  (dispatch) => (
    fetchHeroes()
      .then((heroes) => dispatch(getHeroesAction(heroes)))
  )
);

export default fetchHeroesAction;
