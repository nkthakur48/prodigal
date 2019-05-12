import React, {Component} from 'react'
import {AppBar, Toolbar, Paper, Icon, IconButton, InputBase} from '@material-ui/core'
import {Popover, ClickAwayListener, Typography, Badge} from '@material-ui/core'
import Avatar from '../../img/Avatar.png'
import Notification from "../Notification";

class Header extends Component {
    state = {
        anchorEl: null
    }
    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget})
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    }

    render() {
        const {anchorEl} = this.state
        const open = Boolean(anchorEl)
        const style = {
            AppBar: {backgroundColor: '#FFFFFF'},
            Toolbar: {display: 'flex'},
            Paper: {flex: '4'},
            IconButton: {color: '#BCBCCB'},
            InputBase: {flex: '4'}
        }
        return (
            <AppBar position="static" style={style.AppBar}>
                <Toolbar style={style.Toolbar}>
                    <Paper elevation={0} style={style.Paper}>
                        <div style={{display: 'flex'}}>
                            <IconButton>
                                <Icon>search</Icon>
                            </IconButton>
                            <InputBase style={style.InputBase} placeholder="Search Transactions, Invoices or Help"/>
                        </div>
                    </Paper>
                    <div>
                        <IconButton style={style.IconButton}
                                    aria-owns={open ? 'menu-notification' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit">
                            <Badge color="secondary" variant="dot">
                                <Icon>notification_important</Icon>
                            </Badge>
                        </IconButton>
                        <Popover style={{top: '50px', padding: '10px 20px'}}
                            id="menu-notification"
                            open={open}
                            anchorEl={this.anchorEl}
                            onClose={this.handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Paper style={{padding: '10px 20px'}}>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Notification/>
                                </ClickAwayListener>
                            </Paper>
                        </Popover>
                    </div>
                    <Icon style={{color: '#BCBCCB'}}>more_vert</Icon>
                    <Typography variant="overline">
                        Joan Doe
                    </Typography>
                    <Icon style={{color: '#BCBCCB'}}>keyboard_arrow_down</Icon>
                    <img src={Avatar} alt="avatar"></img>
                </Toolbar>
            </AppBar>
        )
    }

}

export default Header
