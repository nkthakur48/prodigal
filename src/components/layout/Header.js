import React, {Component} from 'react'
import {AppBar, Toolbar, Paper, Icon, IconButton, InputBase} from '@material-ui/core'
import {Popper, Grow, ClickAwayListener, MenuList, MenuItem, Typography, Badge} from '@material-ui/core'
import Avatar from '../../img/Avatar.png'

class Header extends Component {
    state = {
        anchorEl: null,
    };
    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget})
    };

    handleClose = () => {
        this.setState({anchorEl: null})
    };

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
                        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-notification"
                                    style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
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
