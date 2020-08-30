import React, {useState} from 'react'
import { Grid, TextField, makeStyles, Typography,
    Paper } from '@material-ui/core'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'

const useStyles = makeStyles((theme) => ({
    wrapper:{
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        minHeight: 500,
    },
    container:{
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    form:{
        display:'flex', 
        flexDirection:'column',
        justifyContent: 'space-evenly', 
        '& .MuiTextField-root':{
            paddingTop:theme.spacing(.5),
            paddingBottom:theme.spacing(.5)
        }
    },
    map:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            height: 500,
            paddingLeft: '0'
        }   
    }
}))

function Map() {
    const [selected, setSelected] = useState(null)
    return (
        <GoogleMap defaultZoom={12} defaultCenter={{lat:39.221240 , lng:-76.843045}}>
            <Marker position={{lat:39.221240 , lng:-76.843045}} />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function Contact() {
    const classes = useStyles();

    return (
        <Grid container id='contact' className={classes.wrapper}>
            <Grid item xs={12} md={6}>
                <Paper className={classes.container}>
                    <Typography variant='h4'>Contact Us</Typography>
                    <Typography variant='body2'>Please feel free to reach out to us with any questions or requests, we will gladly get back to you within 24 business hours. Thank you!</Typography>
                    <form className={classes.form}>
                        <TextField id="standard-basic" label="Name" />
                        <TextField id="standard-basic" label="Email" />
                        <TextField id="standard-basic" label="Phone Number" />
                        <TextField id="standard-basic" label="Subject" />
                        <TextField id="standard-multiline-static" label="Message" multiline rows={6} />
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} className={classes.map}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </Grid>
        </Grid>
    )
}

export default Contact
