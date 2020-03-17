import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create'
import ListIcon from '@material-ui/icons/List';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ContactsIcon from '@material-ui/icons/Contacts';

import SaaLomake from '../tehtävät/components/SaaLomake';
import Ruokalista from '../components/Ruokalista';
import Sananlasku from '../components/Sananlasku';
import Slideri from '../components/Slideri';
import Koulutusohjelmat from '../components/Koulutusohjelmat';

import { Link } from 'react-router-dom';

function NavBar(props) {
    const [value, setValue] = useState(0);
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
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary='Tietoja Sovelluksesta' />
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
                      <ListItem button>
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