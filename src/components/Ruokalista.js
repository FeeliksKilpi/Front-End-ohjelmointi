import React, { useEffect, useState } from 'react';
import { Paper, Grid, Card, CardHeader, CardContent, CardActions, Typography, Button, Select, MenuItem, FormControl, TextField, 
List, ListItem, Container, GridList } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
// Ikonit
import EcoIcon from '@material-ui/icons/Eco';
import EuroIcon from '@material-ui/icons/Euro';
import MoodIcon from '@material-ui/icons/Mood';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SaveIcon from '@material-ui/icons/Save';

import { makeStyles } from '@material-ui/core/styles';

import HaeJaTeeRavintolat from './HaeJaTeeRavintolat';
import ValintaPaneeli from './ExpansionPanel';

const useStyles = makeStyles({
    kortti: 
    {
    backgroundColor: '#e3d5b8', color: '#nnn',
    border: '2px solid grey',
    borderRadius: '20px',
    margin: '10px',
        },
    kontrollit: {
        backgroundColor: '#e3d5b8', color: '#nnn',
        border: '2px solid grey',
        borderRadius: '20px',
        margin: '20px',
    },
    logo: {
        fontFamily: 'Abril Fatface'
        }
    })

function Ruokalista() {
    let {haetid} = useParams();
    const classes = useStyles();
    const [ruokalistat, setRuokalistat] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan...');
    const [ravintola, setRavintola] = useState();
    const [luonastietoja, setLuonastietoja] = useState();
    // Ravintolan ID, josta tiedot haetaan
    const [ID, setID] = useState(127);
    // Oletuksena 59, eli Kalasatama
   
    const fetchUrl = async () => {
        try {
            //Odotetaan responsea ja talletetaan response muuttujaan
            const response = await fetch('https://www.sodexo.fi/ruokalistat/output/weekly_json/' + ID);
            //Muutetaan response JSON:iksi
            const json = await response.json();
            setVirhe('');
            setRuokalistat(json.mealdates);
            setRavintola(json.meta.ref_title);
            setLuonastietoja(json.timeperiod);
           
        } catch (error) {
            setVirhe("Haku ei onnistunut");
        }
    }
    // Tässä kohtaa useEffect laukaisee tiedon haun kun komponentti on luotu
    useEffect(() => { fetchUrl() }, []);
    
    const hae = (e) => {
        if (ID.length > 0) {
            
            fetchUrl(ID);
        }else {
         setVirhe('Anna ravintolan ID');
        }
     }

   return (
   <div>
       <Container >
        <Paper align="center" elevation={3} className={classes.kortti}>
                <Typography className={classes.logo} variant={"h1"} align="center" style={ {padding: '4px'} }>{ravintola}</Typography>
                <Typography className={classes.logo} variant={"h2"} align="center">{luonastietoja}<FastfoodIcon style={ {fontSize: 70} }/></Typography>
                
        </Paper >
        <Paper elevation={1} className={classes.kontrollit}>
            <GridList spacing={2} cols={2}>
                
                <FormControl style={ {fontSize: '12px', margin: '20px'} }>
                    <TextField htmlFor='ravintola' variant="outlined" label={"Ravintolan ID, nyt: " + ID} onChange={ (e) => setID(e.target.value)}></TextField>
                        <Select id="ravintolavalinta" name="ravintolatlista" value={ID} onChange={ (e) => setID(e.target.value) }>
                            <MenuItem value='59'>Ravintola Kalasatama (59)</MenuItem>
                            <MenuItem value='89'>Ravintola Viikin Kartano (89)</MenuItem>
                            <MenuItem value='56'>Ravintola La Mer (56)</MenuItem>
                            <MenuItem value='127'>Ravintola JAMK Bittipannu (127)</MenuItem>
                            <MenuItem value='120'>Ravintola Elektra (120)</MenuItem>
                            <MenuItem value='121'>Ravintola Galaksi (121)</MenuItem>
                        </Select>
                        {virhe}
                    <Button color="primary" variant="contained" value={ID} onClick={ (e) => hae(e) } style={{margin: '10px'}}>Hae</Button>
                </FormControl>
                <ValintaPaneeli />
            </GridList>
        <Typography variant={'h2'}style={{textAlign: 'center'}}>Suosikkiravintoloita</Typography>
            <HaeJaTeeRavintolat />
        </Paper>
        </Container>   
        <Container>
            {/*sisäkkäiset map-funktiot ja Objektiksi muuttaminen*/}
            <Grid container spacing={5} direction="column" alignItems="stretch">
            { ruokalistat.map((tiedot) => (
                <Grid style={ {fontSize: '14px'} } key = {tiedot.courses}>
                    <Card className={classes.kortti}>
                        <CardHeader title={tiedot.date} subheader={ravintola} style={{backgroundColor: '#b09a72'}}></CardHeader>
                            <CardContent>
                            <Typography color='primary'>
                                <List>
                                    { (Object.values(tiedot.courses)).map (course => {
                                        //Testataan toimiiko indexointi stringistä
                                        console.log((course.category.indexOf('Kasvis')));
                                            return (
                                                <div>
                                                <ListItem>
                                                { course.category.indexOf('Kasvis') === -1 ?
                                                course.title_fi + ' ' + course.properties + ' Hinta: ' + course.price 
                                                // ? : valintarakenne
                                                : course.title_fi + ' ' + course.properties + ' Hinta: ' + course.price + ' Kasvisruoka'
                                                }
                                                <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />} 
                                                style={{fontSize: '10px', align: 'right'}} component={ Link } to={'/lisaa/' + course.title_fi + '/' + course.price + '/' + course.properties }>Suosikki</Button>
                                                </ListItem> 
                                                </div> ) } 
                                    ) } 
                                </List>
                            </Typography>
                            </CardContent>
                        <CardActions style={{backgroundColor: '#b09a72'}}>
                            <Button color="secondary" variant="outlined">Allergiatiedot <HelpOutlineIcon /></Button>
                            <Button color="secondary" variant="outlined">Hinnasto <EuroIcon /></Button>
                            <Button color="secondary" variant="outlined">Ilmastohyvitys <EcoIcon /></Button>
                            <Button color="secondary" variant="outlined">Suosikit <MoodIcon /></Button>
                        </CardActions>
                    </Card>
                </Grid>
            
                    ))  }
            </Grid>
    </Container>     
</div>);
}


export default Ruokalista;