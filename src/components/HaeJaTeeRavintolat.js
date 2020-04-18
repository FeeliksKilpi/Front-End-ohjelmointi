import React, { useEffect, useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import { GridList, Typography, Card, CardHeader, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const url = "http://localhost:8080";


function HaeJaTeeRavintolat () {
    const [ravintolat, setRavintola] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');


    const haeKaikkiRavintolat = async () => {
    try {
        const response = await fetch(url + '/ravintola/all');
        const json = await response.json();
        setRavintola(json);
        setVirhe('');
            } catch (error) {
        setRavintola([]);
        setVirhe('Tietojen haku ei onnistunut');
            }
        }
    useEffect(() => {
    haeKaikkiRavintolat();
        }, []);
    

if (virhe.length > 0) {
    return ( <Typography>{ virhe }</Typography> ); 
}

if (ravintolat.length > 0) {
    
    return ( 
    <div>
    <GridList style={{margin: '20px'}}>
    { ravintolat.map (ravintola => {
        return (
            <Card key={ravintola} style={{width: '200px', height: '370px', margin: '5px'}}>
                <CardHeader title={ ravintola.nimi }></CardHeader>
                    <CardContent>
                        <Typography style={{fontSize: '14px'}}>{ ravintola.osoite }</Typography>
                            { ravintola.kuva ?
                            <CardMedia title="kuva:" image={ ravintola.kuva } style={{width: 150, height: 150 }}/>
                                : <Typography>Ei kuvaa</Typography>
                            }
                    </CardContent>
                    <CardActions>
                        <Button style={{padding: '5px', fontSize: '10px'}} variant="contained" color="secondary" component={ Link } to={'/ravintola/haettu/' + ravintola.id }>Valitse<CheckIcon /></Button>
                        <Button style={{padding: '5px', fontSize: '10px'}} variant="contained" color="primary" component={ Link } to={'/lisaaravintola/' + ravintola.nimi + '/' + ravintola.osoite + '/' + ravintola.kuva }>Suosikki<CheckIcon /></Button>
                    </CardActions>
            </Card> )
                })    
            }
    </GridList> 
    </div> 
    );
}
    return ( <Typography>Yhtään ravintolaa ei ole</Typography> );

}
export default HaeJaTeeRavintolat;



