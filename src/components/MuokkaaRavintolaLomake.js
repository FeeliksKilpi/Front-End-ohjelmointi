import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Paper, Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const url = "http://localhost:8080";
const MuokkaaRavintolaLomake = () => {

    let { haettuId, haettuNimi, haettuOsoite, haettuKuva } = useParams();
    const [viesti, setViesti] = useState('');
    const [ravintola, setValues] = useState(
        {
            id: haettuId,
            nimi: haettuNimi,
            osoite: haettuOsoite,
            kuva: haettuKuva,
        } );

        const muuta = (e) => {
            setValues({
                ...ravintola,
                [e.target.name]: e.target.value
            });
            console.log(ravintola.nimi);
        }
        
    const muokkaaRavintola = (e) => {
        e.preventDefault();

        const formData = {
            'id' : ravintola.id,
            'nimi' : ravintola.nimi,
            'osoite' : ravintola.osoite,
            'kuva' : ravintola.kuva,
        }

        axios.post(url + '/ravintola/edit/' + ravintola.id, formData)
            .then(response => {
                if (response.status === 200) {
                    setValues( {id: '', nimi: '', osoite: '', kuva: ''} );
                    setViesti('Muutokset suoritettu');
                } 
                else {
                    setViesti('Muutos ei onnistunut');
                    } 
                }
            )
             
        }

    const tyhjenna = (e) => {
        e.preventDefault();
        setValues({
            nimi: '',
            osoite: '',
            kuva: '',
        });
        setViesti('tyhjennetty');
      };

      

return (
<Paper style={{margin: '20px'}}>
    <Typography>{ viesti }</Typography>
    <form onSubmit={ muokkaaRavintola } style={{margin: '20px'}}>
        <TextField label='Id' name='id' value = { ravintola.id } 
            onChange={ muuta } margin='normal' required fullWidth={true} autoFocus/>
        <TextField label='Nimi' name='nimi' value={ ravintola.nimi }
            onChange={ muuta } margin='normal' required fullWidth={true} autoFocus/>
        <TextField label='osoite' name='osoite' value={ ravintola.osoite }
            onChange={ muuta } margin='normal' required fullWidth={true} />
        <TextField label='kuvaurl' name='kuva' value={ ravintola.kuva }
            onChange={ muuta } margin='normal' required fullWidth={true} />
        <div>
              <Button style={{margin: '10px', padding: '15px'}} onClick={ muokkaaRavintola } variant="contained" color="primary"><CreateIcon />Tee muutokset</Button>
              <Button style={{margin: '10px', padding: '15px'}} onClick={ tyhjenna } variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
              <Button style={{margin: '10px', padding: '15px'}} variant="outlined" color="secondary" component={Link} to = {'/suosikkiravintolat'}><ClearIcon />Takaisin</Button>
        </div> 
    </form>
</Paper>
);
}

export default MuokkaaRavintolaLomake;