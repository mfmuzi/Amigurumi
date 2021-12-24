import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';


const Header = () => {

    return (
        <Grid container diretion="row" justifyContent="space-evenly" alignItems="center" item xs={12}>
            <Grid></Grid>
            <Grid></Grid>
            <Typography variant='h2'>
                Amigurumi
            </Typography>
            <Grid >
                <Link to="/">
                    <Button size="large">Home</Button>
                </Link>
                <Link to="/contacts">
                    <Button size="large">Contato</Button>
                </Link>
                <Cart />
            </Grid>
        </Grid>
    )
}

export default Header;