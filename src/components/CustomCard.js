import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, Avatar, IconButton, CardHeader,
        CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function MediaCard({ image2, name, id, logo }) {
  return(
    <Card sx={{ maxWidth: 345, backgroundColor: 'green' }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'withe', boxShadow: 5, padding: '5px', margin: '2px'}} aria-label="recipe" src={logo} >
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
            title="green iguana"
        />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizard are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antartica
                  </Typography>
                </CardContent>
    </Card>
  );
}
            