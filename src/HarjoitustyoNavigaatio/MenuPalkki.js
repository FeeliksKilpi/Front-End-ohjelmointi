import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import SaaLomake from '../tehtävät/components/SaaLomake';
import Ruokalista from '../components/Ruokalista';
import Sananlasku from '../components/Sananlasku';
import Slideri from '../components/Slideri';


function MenuPalkki() {
    const [value, setValue] = useState(0);
    const [anchorMenu, setMenuOpen] = useState(null);
    const [personMenu, setPersonOpen] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true); }
    const handleCloseDrawer = () => { setOpen(false); }

    const handleMenu = (event) => { setMenuOpen(event.currentTarget); }
    const handleClose = () => { setMenuOpen(null); }

    const handlePersonMenu = (event) => { setPersonOpen(event.currentTarget); }
    const handlePersonMenuClose = () => { setPersonOpen(null); }

    const handleChange = (event, val) => {
    setValue(val); }

    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit' onClick={ handlePersonMenu }>
                    <AccountCircleIcon />
                    </IconButton>

                    <IconButton color='inherit' onClick={ handleMenu }>
                    <ListIcon />
                    </IconButton>
                </Toolbar>
                <Tabs value={ value } onChange={ handleChange } >
                    <Tab label='SaaLomake' icon={<WbSunnyIcon />} />
                    <Tab label='Ruokalista' icon={<FastfoodIcon />} />
                    <Tab label='Sananlasku' icon={<CreateIcon />}/>
                    <Tab label='Slideri' icon={<ListIcon />}/>
                </Tabs>
            </AppBar>
                <MenuList>
                    <Menu anchorEl={ anchorMenu } open={ Boolean(anchorMenu) } onClose={ handleClose }>
                        <MenuItem onClick={ handleClose }>
                            <ListItemIcon><CreateIcon /></ListItemIcon>
                            <ListItemText primary='Lisää' />
                        </MenuItem>
                        <MenuItem onClick={ handleClose }>
                            <ListItemIcon><ListIcon /></ListItemIcon>
                            <ListItemText primary='Listaa' />
                        </MenuItem>
                    </Menu>
                    <Menu anchorEl={ personMenu } open={ Boolean(personMenu) } onClose={ handlePersonMenuClose } >
                        <MenuItem onClick={ handleClose }>
                            <ListItemIcon><HelpIcon /></ListItemIcon>
                            <ListItemText primary='Tietoja' />
                        </MenuItem>
                        <MenuItem onClick= { handleClose }>
                            <ListItemIcon><ContactMailIcon /></ListItemIcon>
                            <ListItemText primary='Ota yhteyttä' />
                        </MenuItem>
                    </Menu>
                </MenuList>
            

            { value === 0 && <SaaLomake/>}
            { value === 1 && <Ruokalista/>}
            { value === 2 && <Sananlasku/> }
            { value === 3 && <Slideri/> }
        </div>
    )
}

export default MenuPalkki;