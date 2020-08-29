import React from 'react'
import { Container, Typography, makeStyles, IconButton, ButtonGroup } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    wrapper:{
        backgroundColor: 'rgb(33, 33, 33)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: theme.palette.text.primary,
        paddingTop: theme.spacing(3),
        minHeight:150
    },
    info:{
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `0 ${theme.spacing(1)}`
    },
    address:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
    },
    phone:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
    },
    color:{
        color:theme.palette.secondary.main
    }
}))

function Footer() {
    const classes = useStyles();

    return (
        <Container maxWidth='xl' className={classes.wrapper}>
            <div className={classes.address}>
                <LocationOnIcon style={{alignSelf:'center'}} className={classes.color} />
                <Typography variant='h6'>5501 Twin Knolls Road</Typography>
                <Typography variant='h6'>Suite 104</Typography>
                <Typography variant='h6'>Columbia, MD 21045</Typography>
            </div>
            <div className={classes.info}>
                <Typography variant='body1'>© 2020 by Construction Underwriters, LLC</Typography>
                <Typography variant='h6'>Connect with us!</Typography>
                <ButtonGroup>
                    <IconButton><FacebookIcon className={classes.color} /></IconButton>
                    <IconButton><LinkedInIcon className={classes.color} /></IconButton>
                </ButtonGroup>
            </div>
            <div className={classes.phone}>
                <PhoneIcon style={{alignSelf:'center'}} className={classes.color} />
                <Typography variant='h6'>Tel (443) 470-5055</Typography>
                <Typography variant='h6'>Fax (443) 470-7058</Typography>
            </div>
        </Container>
    )
}

export default Footer
