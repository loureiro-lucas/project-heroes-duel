import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Container } from '@mui/material';
import ActionAreaCard from './Card';
import fetchHeroesAction from '../actions';

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      heroes: [],
    }

    this.saveHeroesToState = this.saveHeroesToState.bind(this);
  }

  componentDidMount() {
    const { fetchHeroes } = this.props;
    fetchHeroes()
      .then(() => this.saveHeroesToState());
  }

  saveHeroesToState() {
    const { heroes } = this.props;
    this.setState({
      heroes,
    });
  }

  render() {
    const { heroes } = this.state;
    return (
      <Container>
        <Grid container>
          {
            heroes.length > 0
            && (
              heroes.map((hero, index) => (
              <Grid
                item
                key={ index }
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <ActionAreaCard />
              </Grid>
              ))
            )
          }
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = ({ heroesList: { heroes } }) => ({
  heroes,
})

const mapDispatchToProps = (dispatch) => ({
  fetchHeroes: () => dispatch(fetchHeroesAction()),
})

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHeroes: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
