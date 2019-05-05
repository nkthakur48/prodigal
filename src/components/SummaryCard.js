import React from 'react'
import {Paper, Typography} from '@material-ui/core'

function SummaryCard(props) {

    const style = {
        Paper: {padding: '20px', flex: '1', marginRight: '20px'},
        Title: {fontSize: '15px'},
        Value: {fontSize: '25px', color: '#000000', fontWeight: 'bold'}
    }
    return (
        <Paper style={style.Paper}>
            <Typography variant="caption" style={style.Title}>
                {props.title}
            </Typography>
            <div style={{display: 'flex', marginTop: '20px', justifyContent: 'space-between'}}>
                <div>
                    <Typography variant="caption" style={style.Value}>
                        {props.value}
                    </Typography>
                    <Typography variant="overline">
                        {props.value}
                    </Typography>
                </div>
                <div>
                    Graph here
                </div>
            </div>
        </Paper>
    )
}

export default SummaryCard