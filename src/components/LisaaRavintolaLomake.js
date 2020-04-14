import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import Ruokalista from './Ruokalista';

const url = "http://localhost:8080";
const LisaaRavintolaLomake = () => {
    
    const [viesti, setViesti] = useState('');
    const [ravintola, setValues] = useState(
        {
            nimi: '',
            osoite: '',
            kuva: '',
        } );
        
    const lisaaRavintola = (e) => {
        e.preventDefault();

        const formData = {
            'nimi' : ravintola.nimi,
            'osoite' : ravintola.osoite,
            'kuva' : ravintola.kuva,
        }

        axios.post(url + '/ravintola/add', formData)
            .then(response => {
                if (response.status === 200) {
                    console.log(ravintola.nimi + '' + ravintola.osoite + ' Lisätty!');
                    setValues( {nimi: '', osoite: '', kuva: ''} );
                    setViesti('Lisätty!');
                } 
                else {
                    setViesti('Lisäys ei onnistunut');
                    } 
                }
            )
            window.location.reload(false);
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

      const muuta = (e) => {
          setValues({
              ...ravintola,
              [e.target.name]: e.target.value
          });
      }

return (
<Paper style={{margin: '20px'}}>
    <form onSubmit={ lisaaRavintola } style={{margin: '20px'}}>
        <TextField label='Nimi' name='nimi' value={ ravintola.nimi }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} autoFocus/>
        <TextField label='osoite' name='osoite' value={ ravintola.osoite }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        <TextField label='kuvaurl' name='kuva' value={ ravintola.kuva }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        
              <Button style={{margin: '10px', padding: '15px'}} onClick={ (e) => lisaaRavintola(e) } variant="contained" color="primary"><CreateIcon />Lisää</Button>
              <Button style={{margin: '10px', padding: '15px'}} onClick={ (e) => tyhjenna(e) } variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
              <Button style={{margin: '10px', padding: '15px'}} variant="outlined" color="secondary" component={Link} to = {'/'}><ClearIcon />Takaisin</Button>
    </form>
</Paper>
);
}

export default LisaaRavintolaLomake;