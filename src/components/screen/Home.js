import React from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import SummaryCard from '../SummaryCard'
import Graph from '../Graph'

function Home() {
    const style = {
        Home: {backgroundColor: '#F0F0F7', padding: '40px 40px 40px 60px'},
        Typography: {marginBottom: '40px'},
        SummaryCards: {display: 'flex', justifyContent: 'space-evenly'},
        SummaryCard: {flex: 1, alignSelf: 'stretch'}
    }

    return (
        <div className='Home' style={style.Home}>
            <Typography variant="h5" style={style.Typography}>
                Overview
            </Typography>
            <div className="SummaryCards" style={style.SummaryCards}>
                <SummaryCard title="Total Views" value="246K" changePercent="+13.8"/>
                <span style={{flex: '1'}}></span>
                <SummaryCard title="Products Sold" value="2453" changePercent="+13.8"/>
                <span style={{flex: '1'}}></span>
                <SummaryCard title="Total Earnings" value="$39K" changePercent="-13.8"/>
            </div>
            <div className="Graph">
                <Graph/>
            </div>
            <Grid container>
                <Grid item sm={8}>
                    <Paper>This is</Paper>
                </Grid>
                <Grid item sm={4}>
                    <Paper>One thing</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
