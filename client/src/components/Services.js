import React from 'react'
import { SERVICES } from '../config/services'
import { Grid, Typography, makeStyles, Divider, List, 
    ListItem, Paper } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HouseIcon from '@material-ui/icons/House';
const useStyles = makeStyles((theme) => ({
    wrapper:{
        padding: theme.spacing(2),
        minHeight: 400,
        width:'100vw',
        maxWidth:'100%',
        backgroundColor: theme.palette.background.default,
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    subtitle:{
        position:'absolute',
        top:'10%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
    },
    item:{
        minHeight: 300,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding:theme.spacing(2),
    },
    icon:{
        fontSize: 60,
        marginBottom: theme.spacing(2)
    }
}))


function Services() {
    const classes = useStyles();

    const getIcon = (type) => {
        if(type === 'Contract Bonds') return <DescriptionIcon color='primary' className={classes.icon} />
        if(type === 'Commercial Bonds') return <ApartmentIcon color='primary' className={classes.icon} />
        if(type === 'Subdivision Bonds') return <HouseIcon color='primary' className={classes.icon} />
    }
    return (
        <Grid container id='services' className={classes.wrapper}>
            {SERVICES.map((service) => (
                <Grid item xs={12} sm={6} md={3} key={service.title}>
                <Paper elevation={5} className={classes.item}>
                    {getIcon(service.title)}
                    <Typography variant='h4'>{service.title}</Typography>
                    <List dense>
                        {service.items.map((item) => (
                            <ListItem key={service.items.indexOf(item)}>{item}</ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>
            ))}
        </Grid>
    )
}

export default Services
