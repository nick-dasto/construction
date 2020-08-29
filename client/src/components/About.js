import React from 'react'
import { TEAM } from '../config/team'
import { Paper, Tabs, Tab, Box, AppBar,
    Typography, makeStyles, List, ListItem, Divider, Grid } from '@material-ui/core'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

const useStyles = makeStyles((theme) => ({
    bar:{
        flexGrow: 1,
        backgroundColor:theme.palette.grey[700]
    }
}))

function About() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <AppBar position='static' className={classes.bar}>
            <Tabs value={value} onChange={handleChange}
            indicatorColor="primary" textColor="primary"
            variant='fullWidth'>
                <Tab label="About Us" />
                <Tab label="What We Do" />
                <Tab label="Our Team" />
            </Tabs>
        </AppBar>
        <Paper>
            <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1'>
                            Construction Underwriters is an independent surety bond agency providing for the bonding needs of the construction and service contractor industries.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body2'>
                            Unlike many other independent commercial insurance agents who just do bonds on the side, we focus our entire effort on the surety side of things. In doing so, we have a greater depth of knowledge of the surety industry and a wide network of surety markets of all different sizes, both standard and specialty. This positions us to be able to assist contractors anywhere along the spectrum from emerging to established in both traditional and specialized trades. 
                        </Typography>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant='body1'>
                    Our ultimate goal is to provide the best service possible in order to help our clients succeed.
                </Typography>
                <Typography variant='body2'>
                    We pride ourselves on the following strengths that allow us to work towards achieving this goal each and every day:
                </Typography>
                <List>
                    <ListItem>
                        75+ years of combined industry experience working with contractors of all trades
                    </ListItem>
                    <ListItem>
                        Quick, timely turnaround times for all bid and final bond requests
                    </ListItem>
                    <ListItem>
                        Access to several varying surety markets, which enables us to select the best market to fit our clients' needs
                    </ListItem>
                    <ListItem>
                        A long-term growth oriented approach to doing business, we want to set our clients up for success for years to come
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {TEAM.map(member => (
                    <>
                    <Typography variant='h4'>{member.name}</Typography>
                    <Typography variant='h6'>{member.position}</Typography>
                    <Typography variant='body1'>{member.description}</Typography>
                    </>
                ))}
            </TabPanel>
        </Paper>
        </>
    )
}

export default About
