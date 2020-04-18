import React, { Component } from 'react';
import { Paper, Grid, Card, CardHeader, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const url = "http://localhost:8080";

class SuosikkiRavintolat extends Component {
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
            window.location.reload(false);
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
            <Paper style={{margin: '20px'}}>
                <Typography variant={"h4"} style={{textAlign: 'center'}}>Suosikkiravintolat</Typography>
                <Grid container spacing={24} style={{margin: '20px'}}>
                { this.state.ravintolat.map (ravintola => {
                    return (
                        <Grid item key={ravintola.id} >
                        <Card style={{ maxWidth: 200, minWidth: 170, minHeight: 350, maxHeight: 350, margin: '10px' }}>
                        <CardHeader
                          title={ ravintola.nimi.toUpperCase() + ' ID: ' + ravintola.id }
                          subheader={ ravintola.osoite } />
                          <CardContent>
                            <CardMedia
                                style={{height: 80}}
                                image={ravintola.kuva}
                                title='Ravintolakuva' />
                            
                             <div style={ {textAlign: 'center', marginTop: 10} }>
                               <Button type="submit" color="secondary" variant="contained"  onClick={ this.poista.bind(this, ravintola.id) }>Poista</Button>
                               <Button variant="contained" component={Link} to={ '/ravintola/muokkaa/' + ravintola.id + '/' + ravintola.nimi + '/' + ravintola.osoite + '/' + ravintola.kuva}  style={{marginLeft: 5}}>Muokkaa</Button>
                             </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    
                    )
                })
                    
                }
                </Grid>
                
            </Paper>
        </div>
    )
}

}

export default SuosikkiRavintolat;