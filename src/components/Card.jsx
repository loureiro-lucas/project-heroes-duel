import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ hero, onClick }) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      elevation={2}
    >
      <CardActionArea onClick={ () => onClick(hero) }>
        <CardMedia
          component="img"
          height="300"
          image={ hero.images.sm }
          alt={ `${hero.name} picture` }
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.secondary"
          >
            { hero.name }
          </Typography>
          <Typography
            variant="body2"
            color="primary"
          >
            { hero.biography.publisher }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
