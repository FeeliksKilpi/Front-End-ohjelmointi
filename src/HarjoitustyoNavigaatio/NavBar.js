import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ContactsIcon from '@material-ui/icons/Contacts';

import { Link } from 'react-router-dom';

function NavBar() {
    //Drawer
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }
    
    //Menut
    const [personMenu, setPersonOpen] = useState(null); //Null, eli oletuksena menua ei ole käyttöliittymässä
    const handlePersonMenu = (event) => { setPersonOpen(event.currentTarget); }
    const handlePersonMenuClose = () => { setPersonOpen(null); }

    const menu =
    <Menu anchorEl={ personMenu } open={ Boolean(personMenu) } onClose={ handlePersonMenuClose } >
        <MenuItem onClick={ handleClose }>
          <ListItem button component={ Link } to ='/tietoja'>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary='Tietoja Sovelluksesta'/>
            </ListItem>
        </MenuItem>
        <MenuItem onClick= { handleClose }>
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary='Ota yhteyttä' />
        </MenuItem>
        <MenuItem onClick= { handleClose }>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Ota yhteyttä' />
        </MenuItem>
        <MenuItem onClick= { handleClose }>
            <ListItemIcon><WbSunnyIcon /></ListItemIcon>
            <ListItemText primary='Ota yhteyttä' />
        </MenuItem>
    </Menu>;


    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>
                    <Typography variant='h5' style={ {textAlign: 'center', flexGrow: '1'} }>Ruokalistapalvelu</Typography>
                    <IconButton color='inherit' onClick={ handlePersonMenu }> <AccountCircleIcon /> </IconButton>
                </Toolbar>
                  <Drawer anchor='left' open={ open } onClick={ handleClose }>
                    <List>
                      <ListItem button component={ Link } to ='/'>
                        <ListItemIcon><FastfoodIcon /></ListItemIcon>
                        <ListItemText primary='Ruokalista' />
                      </ListItem>
                      <ListItem button component={ Link } to='/suosikkiruoat'>
                        <ListItemIcon><RestaurantIcon /></ListItemIcon>
                        <ListItemText primary='Suosikkiruoat' />
                      </ListItem>
                      <ListItem button component={ Link } to ='/suosikkiravintolat'>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Suosikkiravintolat' />
                      </ListItem>
                      <ListItem button component={ Link } to ='/yhteystietoja'>
                        <ListItemIcon><ContactsIcon /></ListItemIcon>
                        <ListItemText primary='Ravintoloiden yht.tietoja' />
                      </ListItem>
                    </List>
                  </Drawer>
                  { menu } {/* Menukomponentti */}
            </AppBar>
        </div>
    )
}

export default NavBar;