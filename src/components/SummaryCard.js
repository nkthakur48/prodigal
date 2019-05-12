import React from 'react'
import {Icon, Paper, Typography} from '@material-ui/core'

function SummaryCard(props) {

    const style = {
        Paper: {padding: '20px', flex: '9'},
        Title: {fontSize: '15px'},
        Value: {fontSize: '25px', color: '#000000', fontWeight: 'bold'},
        changePercent: {
            up: {color: '#69E4A6', fontWeight: 'bold'},
            down: {color: '#FF4141', fontWeight: 'bold'}
        }
    }

    const absChangePercent = parseInt(props.changePercent) > 0 ? parseFloat(props.changePercent) : -parseFloat(props.changePercent)
    const changePercentStyle = parseInt(props.changePercent) > 0 ? style.changePercent.up : style.changePercent.down
    const trendIcon = parseInt(props.changePercent) > 0 ? 'arrow_drop_up' : 'arrow_drop_down'
    return (
        <Paper style={style.Paper} elevation={1}>
            <Typography variant="caption" style={style.Title}>
                {props.title}
            </Typography>
            <div style={{display: 'flex', marginTop: '20px', justifyContent: 'space-between'}}>
                <div>
                    <Typography variant="caption" style={style.Value}>
                        {props.value}
                    </Typography>
                    <div style={{display: 'flex'}}>
                        <Icon style={changePercentStyle}>{trendIcon}</Icon>
                        <Typography variant="overline" style={changePercentStyle}>
                            {absChangePercent}%
                        </Typography>
                    </div>
                </div>
                <div>
                    <Icon style={changePercentStyle} fontSize='large'>bar_chart</Icon>
                </div>
            </div>
        </Paper>
    )
}

export default SummaryCard