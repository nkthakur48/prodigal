import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import {List, ListItem, ListItemIcon, ListItemText, Icon} from '@material-ui/core'


function SidePane(props) {
    const style = {
        SidePane: {height: '100%', backgroundColor: '#43425D'},
        Typography: {letterSpacing: '0.2em', fontSize: '15px', fontWeight: 'bold'},
        AppBar: {backgroundColor: '#3B3B53'},
        List: {backgroundColor: '#43425D', paddingTop: '0px'},
        ListItem: {paddingBottom: '20px'},
        SelectedListItem: {paddingBottom: '20px', borderLeft: '2px solid #A3A0FB', backgroundColor: '#3B3B53'},
        ListItemIcon: {paddingLeft: '5px', marginRight: '5px'},
        Icon: {color: '#9190AB'},
        SelectedIcon: {color: '#A3A0FB'},
        ListItemText: {color: '#FFFFFF'}
    }

    const sidePaneNavItems = [{icon: 'home', value: 'Home'},
        {icon: 'equalizer', value: 'Dashboard'},
        {icon: 'mail_outline', value: 'Inbox'},
        {icon: 'view_carousel', value: 'Products'},
        {icon: 'receipt', value: 'Invoices'},
        {icon: 'person', value: 'Customers'},
        {icon: 'forum', value: 'Chat Room'},
        {icon: 'insert_invitation', value: 'Calendar'},
        {icon: 'donut_small', value: 'Help Center'},
        {icon: 'settings', value: 'Settings'}]

    const getSidePaneNavItemsWithMeta = () => {
        const items = []
        for (let i = 0; i < sidePaneNavItems.length; i++) {
            if (sidePaneNavItems[i].value === props.selectedTab) {
                items.push({
                    icon: sidePaneNavItems[i].icon,
                    value: sidePaneNavItems[i].value,
                    iconStyle: style.SelectedIcon,
                    listItemStyle: style.SelectedListItem
                })
            } else {
                items.push({
                    icon: sidePaneNavItems[i].icon,
                    value: sidePaneNavItems[i].value,
                    iconStyle: style.Icon,
                    listItemStyle: style.ListItem
                })
            }
        }
        return items
    }

    return (
        <div className="SidePane" style={style.SidePane}>
            <AppBar position="static" style={style.AppBar}>
                <Toolbar>
                    <Typography variant="overline" color="inherit" align='left' style={style.Typography}>
                        IMPEKABLE
                    </Typography>
                </Toolbar>
            </AppBar>
            <List component="nav" style={style.List}>
                {getSidePaneNavItemsWithMeta().map((item, index) => (
                    <ListItem button color="inherit" style={item.listItemStyle} key={index}>
                        <ListItemIcon style={style.ListItemIcon}>
                            <Icon style={item.iconStyle}>{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText disableTypography primary={item.value} style={style.ListItemText}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default SidePane
