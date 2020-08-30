import React from 'react'
import { Link } from "react-scroll";
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
        <AppBar position="fixed" color='default' className={classes.bar}>
            <Toolbar>
                <Typography variant="h4" className={classes.title}>Construction Underwriters LLC</Typography>
                <ButtonGroup color="primary" variant="text">
                    <Button>
                        <Link to="home" spy={true}
                        smooth={true} offset={-70} duration={500}>
                            Home
                        </Link>
                    </Button>
                    <Button>
                        <Link to="services" spy={true}
                        smooth={true} offset={-70} duration={500}>
                            Services
                        </Link>
                    </Button>
                    <Button>
                        <Link to="about" spy={true}
                        smooth={true} offset={-70} duration={500}>
                            About
                        </Link>
                    </Button>
                    <Button>
                    <Link to="contact" spy={true}
                        smooth={true} offset={-70} duration={500}>
                            Contact
                        </Link>
                    </Button>
                    <Button>
                        <Link to="forms" spy={true}
                        smooth={true} offset={-70} duration={500}>
                            Forms
                        </Link>
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
