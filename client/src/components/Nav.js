import React, { useState } from 'react'
import { Link } from "react-scroll";
import { AppBar, Toolbar, Typography, ButtonGroup, 
    Button, makeStyles, Drawer, List, ListItem,
    IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    bar:{
        // backgroundColor:theme.palette.grey[600]
    },
    title:{
        flexGrow: 1,
        color: '#fff'
    },
    buttons:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    burger:{
        color:theme.palette.primary.main,
        [theme.breakpoints.up('md')]:{
            display:'none'
        }
    },
    list:{
        minWidth: 225,
        height:'50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        '& .MuiListItem-button':{
            height:'100%'
        }
    },
}))

function Nav() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="fixed" color='default' className={classes.bar}>
            <Toolbar>
                <Typography variant="h4" className={classes.title}>Construction Underwriters LLC</Typography>
                <ButtonGroup color="primary" variant="text" className={classes.buttons}>
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
                <IconButton size='medium' className={classes.burger} onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
                    <List className={classes.list}>
                        <ListItem button>
                            <Link to="home" spy={true} onClick={() => setOpen(false)}
                            smooth={true} offset={-70} duration={500}>
                                Home
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="services" spy={true} onClick={() => setOpen(false)}
                            smooth={true} offset={-70} duration={500}>
                                Services
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="about" spy={true} onClick={() => setOpen(false)}
                            smooth={true} offset={-70} duration={500}>
                                About
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="contact" spy={true} onClick={() => setOpen(false)}
                            smooth={true} offset={-70} duration={500}>
                                Contact
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="forms" spy={true} onClick={() => setOpen(false)}
                            smooth={true} offset={-70} duration={500}>
                                Forms
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
