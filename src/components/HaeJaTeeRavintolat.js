import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SuosikkiRavintolat from './SuosikkiRavintolat';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { GridList } from '@material-ui/core';

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
                        <Typography>{ ravintola.osoite }</Typography>
                            { ravintola.kuva ?
                            <CardMedia title="kuva:" image={ ravintola.kuva } style={{width: 150, height: 150 }}/>
                                : <Typography>Ei kuvaa</Typography>
                            }
                    </CardContent>
                    
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



