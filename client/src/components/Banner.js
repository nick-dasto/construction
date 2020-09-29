import React, {useRef, useEffect} from 'react'
import {TimelineLite, Power3} from 'gsap';
import { Link } from "react-scroll";
import { Typography,Button, makeStyles } from '@material-ui/core'
import image from "../assets/bkg3.jpg"

const useStyles = makeStyles((theme) => ({
    banner:{
        backgroundColor: "#3e3e3e",
        background: 'url(' + image + ') center bottom no-repeat',
        backgroundSize: 'cover',
        height:500,
        position:'relative',
        width:'100vw',
        maxWidth:'100%',
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
    let title = useRef(null);
    let slogan = useRef(null);
    let button = useRef(null)
    let tl = new TimelineLite({ delay: .8});

    useEffect(() => {
        tl.staggerFrom([title, slogan, button], 2, {
            opacity:0,
            ease:Power3.easeOut,
            delay:.8
        }, .4)
    }, [tl])


    return (
        <div id='home' className={classes.banner}>
            <div className={classes.content}>
                <Typography variant='h4' ref={el => title = el} className={classes.text}>Construction Underwriters, LLC</Typography>
                <Typography variant='h5' ref={el => slogan = el} className={classes.text}>An Independent Surety Bond Agency</Typography>
                <Button variant="contained" color="primary" ref={el => button = el}>
                <Link to="contact" spy={true}
                        smooth={true} offset={-70} duration={500}>
                            Contact Us
                        </Link>
                </Button>
            </div>
        </div>
    )
}

export default Banner
