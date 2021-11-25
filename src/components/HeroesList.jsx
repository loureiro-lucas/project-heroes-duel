import React from 'react';
import { Grid } from '@mui/material';
import { fetchHeroes } from '../services';

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
    }

    this.saveHeroesToState = this.saveHeroesToState.bind(this);
  }

  componentDidMount() {
    this.saveHeroesToState();
  }

  saveHeroesToState() {
    fetchHeroes()
      .then((heroes) => {
        this.setState({
          heroes,
        });
      })
  }

  render() {
    const { heroes } = this.state;
    return (
      <Grid container>
        {
          heroes.length > 0
          && (
            heroes.map((hero, index) => (
            <Grid item key={ index }>
              <p>{ hero.name }</p>
            </Grid>
            ))
          )
        }
      </Grid>
    )
  }
}

export default HeroesList;
