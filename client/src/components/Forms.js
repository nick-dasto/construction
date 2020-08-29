import React from 'react'
import { Paper, ButtonGroup, Button, 
    makeStyles, Typography, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.default,
        minHeight: 150,
        maxWidth:'100vw',
        padding: theme.spacing(2),
    },
    wrapper:{
        padding: theme.spacing(2),
        alignItems:'center',
        justifyContent:'center',
        maxWidth: 1000
    },
    paper:{
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    button:{
        width: '100%'
    }
}))

function Forms() {
    const classes = useStyles();

    return (
        <Container maxWidth='xl' id='forms' className={classes.container}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} className={classes.wrapper}>
                    <Grid item xs={12}>
                        <Typography variant='h4' align='center'>Online Forms</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color='primary' className={classes.button}>Contractor's Questionnaire</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color='primary' className={classes.button}>Bond Information Sheet</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color='primary' className={classes.button}>Personal Financial Statement</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color='primary' className={classes.button}>Job Cost Breakdown</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Forms
