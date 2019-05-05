import React from 'react'
import {List, ListItem, Avatar, ListItemText, Divider, Typography} from '@material-ui/core'
import Avatar1 from '../img/Avatar1.png'
import Avatar2 from '../img/Avatar2.png'
import Avatar3 from '../img/Avatar3.png'

function Notification() {
    const style = {
        Title: {textAlign: 'center', width: '100%'},
        allNotificationsLink : {color: '#3B86FF', textAlign: 'center', width: '100%'},
        Message: {display: 'inline', fontWeight: 'bold'}
    }
    return (
        <List dense>
            <ListItem>
                <Typography variant="subtitle1" style={style.Title}>
                    Notifications
                </Typography>
            </ListItem>
            <Divider/>
            <ListItem>
                <Avatar src={Avatar1} alt="Avatar1"/>
                <ListItemText primary={
                    <React.Fragment>
                        <Typography component="span" color="textPrimary" style={style.Message}>
                            David Lee
                        </Typography>
                        {' sent you a message'}
                    </React.Fragment>
                } secondary="4 mins ago"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <Avatar src={Avatar2} alt="Avatar2"/>
                <ListItemText primary={
                    <React.Fragment>
                        <Typography component="span" color="textPrimary" style={style.Message}>
                            Alex Johnson
                        </Typography>
                        {' sent you a message'}
                    </React.Fragment>
                } secondary="3 mins ago"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <Avatar src={Avatar3} alt="Avatar3"/>
                <ListItemText primary={
                    <React.Fragment>
                        <Typography component="span" color="textPrimary" style={style.Message}>
                            Jonathan Chen
                        </Typography>
                        {' sent you a message'}
                    </React.Fragment>
                } secondary="4 mins ago"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <Typography variant="caption" style={style.allNotificationsLink}>
                    View all Notifications
                </Typography>
            </ListItem>
        </List>
    )
}


export default Notification
