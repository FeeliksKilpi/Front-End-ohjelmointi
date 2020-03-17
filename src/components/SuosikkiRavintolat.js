import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

//Listaus
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const suosikkiRavintolat = ["Ravintola Kalasatama", "Ravintola Viikin Kartano"];
let uudetSuosikit = [];


function SuosikkiRavintolat() {
    return(
        <div>
            <Paper>
                <Typography variant={"h3"}>Suosikki Ravintolat</Typography>
                <List>
                    <ListItem>

                    </ListItem>
                </List>
                
                
                { suosikkiRavintolat }
            </Paper>
        </div>
    )
}

export default SuosikkiRavintolat;