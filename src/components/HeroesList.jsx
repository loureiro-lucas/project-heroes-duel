import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Container } from '@mui/material';
import ActionAreaCard from './Card';
import CustomizedDialog from './DuelResult';
import { fetchHeroesAction } from '../actions';

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosenHeroes: [],
      isModalOpen: true,
    }

    this.handleClickHero = this.handleClickHero.bind(this);
    this.renderDuel = this.renderDuel.bind(this);
    this.handleCloseDuel = this.handleCloseDuel.bind(this);
    this.renderHeroesList = this.renderHeroesList.bind(this);
  }

  componentDidMount() {
    const { fetchHeroes } = this.props;
    fetchHeroes();
  }

  handleClickHero(hero) {
    const { choosenHeroes } = this.state;
    if (choosenHeroes.some((choosenHero) => choosenHero === hero)) {
      this.setState((current) => ({
        choosenHeroes: current.choosenHeroes.filter((choosenHero) => choosenHero !== hero),
      }))
    } else {
      this.setState((current) => ({
        choosenHeroes: [...current.choosenHeroes, hero],
      }));
    }
  }

  handleCloseDuel() {
    this.setState({
      choosenHeroes: [],
    })
  }

  renderHeroesList(heroes) {
    return(heroes.map((hero, index) => (
      <Grid
        item
        key={ index }
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
      >
        <ActionAreaCard hero={ hero } onClick={ this.handleClickHero } />
      </Grid>
      )))
  }

  renderDuel() {
    const { choosenHeroes, isModalOpen } = this.state;
    const hero1 = choosenHeroes[0];
    const hero2 = choosenHeroes[1];
    const winner = choosenHeroes.reduce((stronger, current) => {
      const currentStats = Object.values(current.powerstats)
        .reduce((sum, stat) => sum + stat, 0);
      const strongerStats = Object.values(stronger.powerstats)
        .reduce((sum, stat) => sum + stat, 0);
      if (currentStats > strongerStats) {
        return current;
      } return stronger;
    }, choosenHeroes[0])
    return (
      <CustomizedDialog
        open={ isModalOpen }
        close={ this.handleCloseDuel}
        hero1={hero1}
        hero2={hero2}
        winner={winner}
      />
    )
  }

  render() {
    const { heroes, searchHeroes } = this.props;
    const { choosenHeroes } = this.state;
    return (
      <Container>
        { choosenHeroes.length === 2 && this.renderDuel() }
        <Grid
          container
          spacing={ 2 }
          margin={ 0.25 }
        >
          {
            searchHeroes.length === 0
            ? this.renderHeroesList(heroes)
            : this.renderHeroesList(searchHeroes)
          }
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = ({ heroesList: { heroes, searchHeroes } }) => ({
  heroes,
  searchHeroes,
})

const mapDispatchToProps = (dispatch) => ({
  fetchHeroes: () => dispatch(fetchHeroesAction()),
})

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchHeroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHeroes: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
