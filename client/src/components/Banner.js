import React from 'react'
import { Container, Typography, Paper, 
    Button, makeStyles } from '@material-ui/core'
import image from "../assets/bkg3.jpg"

const useStyles = makeStyles((theme) => ({
    banner:{
        backgroundColor: "#3e3e3e",
        background: 'url(' + image + ') center bottom no-repeat',
        backgroundSize: 'cover',
        height:400,
        position:'relative'
    },
    content:{
        padding: theme.spacing(3),
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        display:'flex',
        flexDirection:'column',
    },
    text:{
        color:'#fff',
        textShadow: '2px 2px #000'
    }
}))
function Banner() {
    const classes = useStyles();
    return (
        <Container maxWidth='xl' id='home' className={classes.banner}>
            <div className={classes.content}>
                <Typography variant='h4' className={classes.text}>Construction Underwriters, LLC</Typography>
                <Typography variant='h5' className={classes.text}>An Independent Surety Bond Agency</Typography>
                <Button variant="contained" color="primary">Contact Us</Button>
            </div>
        </Container>
    )
}

export default Banner
