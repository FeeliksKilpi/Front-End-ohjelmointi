import React, { useEffect, useState, Component } from 'react';
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
const SuosikkiRavintolat = (props) => {

const [viesti, setViesti] = useState('');
const [ravintola, setValues] = useState(
        {
            id: '',
            nimi: '',
            osoite: '',
            kuva: '',
        } );
  
        const poistaRavintola = () => {
          
  //Poistoon tarvitaan vain ID
          const formData = {
              'id' : ravintola.id,
          }
  
          axios.get(url + '/ravintola/delete/' + formData)
              .then(response => {
                console.log(formData);  
                if (response.status === 200) {  
                      setViesti('Poisto suoritettu');
                  } 
                  else {
                      setViesti('Poisto ei onnistunut');
                      } 
                  }
              )
               
          }

    return(
        <Grid container spacing={24} style={{margin: '20px'}}>
          <Typography>{ viesti }</Typography>
      {  props.ravintolat.map(ravintola => {
              return(
                <Grid item key={ravintola.id} >
                  <Card style={{ maxWidth: 200, minWidth: 170, margin: '10px' }}>
                  <CardHeader
                    title={ ravintola.nimi.toUpperCase() + ' ID: ' + ravintola.id }
                    subheader={ ravintola.osoite } />
                    <CardContent>
                      <CardMedia
                          style={{height: 80}}
                          image={ravintola.kuva}
                          title='Ravintolakuva' />
                      
                       <div style={ {textAlign: 'center', marginTop: 10} }>
                         <Button type="submit" color="secondary" variant="contained"  onClick={ () => poistaRavintola(ravintola.id) }>Poista</Button>
                         <Button variant="contained" component={Link} to={ '/ravintola/muokkaa/' + ravintola.id + '/' + ravintola.nimi + '/' + ravintola.osoite + '/' + ravintola.kuva}  style={{marginLeft: 5}}>Muokkaa</Button>
                       </div>
                    </CardContent>
                  </Card>
                </Grid>
              )
          })
       }
      </Grid>
    )
}

export default SuosikkiRavintolat;