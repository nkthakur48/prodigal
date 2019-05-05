import React from 'react'
import {Typography} from '@material-ui/core'
import SummaryCard from '../SummaryCard'

function Home() {
    const style = {
        Home: {backgroundColor: '#F0F0F7', padding: '40px 40px 40px 60px'},
        Typography: {marginBottom: '40px'},
        SummaryCards: {display: 'flex', justifyContent: 'space-between'},
        SummaryCard: {flex: 1, alignSelf: 'stretch'}
    }

    return (
        <div className='Home' style={style.Home}>
            <Typography variant="h5" style={style.Typography}>
                Overview
            </Typography>
            <div className="SummaryCards" style={style.SummaryCards}>
                <SummaryCard title="Total Views" value="246K" changePercent="+13.8"/>
                <SummaryCard title="Products Sold" value="2453" changePercent="+13.8"/>
                <SummaryCard title="Total Earnings" value="$39K" changePercent="-13.8"/>
            </div>

        </div>
    )
}

export default Home
