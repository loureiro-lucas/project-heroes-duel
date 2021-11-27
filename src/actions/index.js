import { GET_HEROES, SEARCH_HEROES } from './actionTypes';
import { fetchHeroes } from '../services';

const getHeroesAction = (heroes) => ({
  type: GET_HEROES,
  heroes,
});

export const searchHeroesAction = (heroName) => ({
  type: SEARCH_HEROES,
  heroName,
})

export const fetchHeroesAction = () => (
  (dispatch) => (
    fetchHeroes()
      .then((heroes) => dispatch(getHeroesAction(heroes)))
  )
);
