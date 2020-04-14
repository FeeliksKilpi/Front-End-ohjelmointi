import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const url = "http://localhost:8080";

class MatkalistaDeleteMUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  ravintolat: this.props.ravintolat, virhe: '' };
    }

    poista = (id) =>  {
        return fetch(url + "/ravintola/delete/" + id)
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState(prevState => ({ ravintola: prevState.ravintolat.filter(ravintola =>
             ravintola.id !== id)
            }));
         })
         .catch((error) => {
            this.setState({virhe: 'Tietojen poisto ei onnistunut'});
         })
      }
  

    render() {
        if (this.state.ravintolat.length === 0 && this.state.virhe.length === 0) {
            return (<Typography variant='body1'>Yhtään matkaa ei ole</Typography>)
          }
          if (this.state.virhe.length > 0) {
            return(<Typography variant='body1'>{ this.state.virhe }</Typography>)
          }

    return(
        <div>
            <Paper>
                <Typography variant={"h3"}>Suosikki Ravintolat</Typography>
                <List>
                { props.ravintolat.map (ravintola => {
                    return (
                    <ListItem key={ravintola}>
                            { "nimi: " + ravintola.nimi + " - " + "osoite: " + ravintola.osoite } 
                            <Button variant="outlined" color="secondary" value={ ravintola.id } onClick={ (e) => poista(e) } >Poista</Button>
                    </ListItem>
                    
                    )
                })
                    
                }
                </List>
                { viesti }
            </Paper>
        </div>
    )
}

}

export default SuosikkiRavintolatcc;