import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartAction from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const Card = ({product, children}) => {

    const classes = useStyles();

    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();

   
    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item >
                        <img height="160px" width="120px" style={{borderRadius:"5%"}} src={product.image} alt={product.name_product} />
                        <Typography variant='h6'>
                            {children}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {product.price.toFixed(2).toString().replace(".", ",")}
                        </Typography>
                    </Grid>
                    <Button variant="contained" onClick={() => dispatch(cartAction.Add(cart,product))}>
                        Adicionar
                    </Button>
                </Grid>
            </Paper>
        </Grid>

    )
}

export default Card;