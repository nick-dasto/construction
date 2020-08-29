import React from 'react'
import { AppBar, Toolbar, Typography, ButtonGroup, 
    Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bar:{
        // backgroundColor:theme.palette.grey[600]
    },
    title:{
        flexGrow: 1,
        color: '#fff'
    }
}))


function Nav() {
    const classes = useStyles();
    return (
        <AppBar position="static" color='default' className={classes.bar}>
            <Toolbar>
                <Typography variant="h4" className={classes.title}>Construction Underwriters LLC</Typography>
                <ButtonGroup color="primary" variant="text">
                    <Button>Home</Button>
                    <Button>Services</Button>
                    <Button>About</Button>
                    <Button>Contact</Button>
                    <Button>Forms</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
