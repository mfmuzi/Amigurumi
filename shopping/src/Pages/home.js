import { Grid, List, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const HomePage = () => {

    const products = useSelector(state => state.products)

    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = {};
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
        .filter(function (item, index, arr) {
            return arr.indexOf(item, index + 1) === -1;
        })
        .map(JSON.parse)


    const arrayCategory = categorys.map(category => category.name)
    let count = {};
    for (let i = 0; i < arrayCategory.length; i++) {
        // eslint-disable-next-line no-lone-blocks
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }



    return (
        <>
            <Grid container diretion="row" justifyContent="center" alignItems="flex-start" spacing={3}>
                <p style={{ textAlign: "center", marginTop: "40px", width: "70%", fontSize: "20px" }}> Amigurumis são bonecos feitos em tricô e crochê que
                    surgiram nos anos 80 no Japão. Hoje, fazem sucesso em todo mundo, inclusive no Brasil.
                    Existem diversos tipos de amigurumis, para bebês, usados para tranquilizá-los, para crianças, por serem macios
                    e fofos, e para adultos, utilizados na decoração de ambientes. Isso é possivel, pois a técnica de confecção do
                    amigurumi permite a elaboração de vários personagens de desenhos, animais, flores, plantas
                    ou até mesmo seres inventados, agradando todos os públicos.</p>
                <h5 style={{ textAlign: "center", marginTop: "20px", width: "70%", fontSize: "32px" }}>Escolha seu novo amigo!</h5>

            </Grid>
            <Grid container diretion="row" justifyContent="center" alignItems="flex-start" spacing={3} className={classes.root}>

                <Grid style={{ marginTop: "20px" }} item xs={2}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>
                            Categorias
                        </Typography>
                        <List>
                            {category.map(
                                category => {
                                    return (
                                        <li style={{ margin: "20px" }} key={category.id}> {category.name}: {count[category.name]}</li>
                                    );
                                }
                            )}

                        </List>
                    </Paper>
                </Grid>
                <Grid container item xs={9} spacing={3} className={classes.root}>
                    {products.map(item => {
                        return (
                            <Card key={item.id_product} product={item}>
                                {item.name_product}
                            </Card>
                        );
                    })}
                </Grid>
            </Grid></>
    )
}



export default HomePage;