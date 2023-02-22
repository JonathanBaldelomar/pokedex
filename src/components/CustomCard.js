import * as React from 'react';
//import testChart from './components/testChart';
import { useEffect, useState } from 'react';
import { Card, Avatar, IconButton, CardHeader,
        CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function MediaCard({ image2, name, id, logo, pokemon }) {
  return(
    <Card sx={{ maxWidth: 345, width: 345, backgroundColor: 'green' }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'white', boxShadow: 5, padding: '5px', margin: '2px'}} aria-label="recipe" src={logo} >
                </Avatar>
            }
            titleTypographyProps={{variant:'h4', alig: 'left'}}
            title={name}
            subheader={id}
        />
        <CardMedia
            sx={{
            minHeight: '300px',
            maxHeight: '300px',
            padding: '15px',
            objectFit: "contain",
            backgroundColor: 'skyblue',
            width: "auto"
            }}
            image={image2}
            title="Pokemon"
        />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Weight: {pokemon.weight / 10} kg
                    Height: {pokemon.height / 10} mts
                  </Typography>
                  {/* <Typography>
                    <testChart/>
                  </Typography> */}
                </CardContent>
    </Card>
  );
}
            