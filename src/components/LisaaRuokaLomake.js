import React, { useState } from 'react';
import uuid from 'react-uuid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';
import Ruokalista from './Ruokalista';

const url = "http://localhost:8080";
const LisaaRuokaLomake = () => {
    let {haettuNimi, hinta, allergeenit} = useParams();
    const [viesti, setViesti] = useState('');
    const [uusiRuoka, setUusiRuoka] = useState(
        {
            nimi: haettuNimi,
            hinta: hinta,
            allergeenit: allergeenit,
            hiilarit: '',
            proteiini: '',
        });
        
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            'nimi' : uusiRuoka.nimi,
            'hinta' : uusiRuoka.hinta,
            'allergeenit' : uusiRuoka.allergeenit,
            'hiilarit' : uusiRuoka.hiilarit,
            'proteiini' : uusiRuoka.proteiini,
        }

        axios.post(url + '/ruoka/add', formData)
            .then(response => {
                if (response.status === 200) {
                    setUusiRuoka( {nimi: '', hinta: null, allergeenit: '', hiilarit: '', proteiini: ''} );
                    setViesti('Lisätty!');
                } else {
                    setViesti('Lisäys ei onnistunut');
                    } 
                }
            )}

    const tyhjenna = (e) => {
        e.preventDefault();
        setUusiRuoka({
            nimi: '',
            hinta: '',
            allergeenit: '',
            hiilarit: '',
            proteiini: ''
        });
        setViesti('tyhjennetty');
      };
// Kun kenttien arvot muuttuu, muutafunktio säätää uusiRuoka -muuttujan ominaisuuksien arvoiksi kenttien arvot
      const muuta = (e) => {
          setUusiRuoka({
              ...uusiRuoka,
              [e.target.name]: e.target.value
          });
      }

return (
<Paper style={{margin: '20px'}}>
    <form onSubmit={handleSubmit} style={{margin: '20px'}}>
        <TextField label='Nimi' name='nimi' value={ uusiRuoka.nimi }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} autoFocus/>
        <TextField label='Hinta' name='hinta' value={ uusiRuoka.hinta }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        <TextField label='Allergeenit' name='allergeenit' value={ uusiRuoka.allergeenit }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        <TextField label='Hiilarit' name='hiilarit' value={ uusiRuoka.hiilarit }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        <TextField label='Proteiini' name='proteiini' value={ uusiRuoka.proteiini }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />

              <Button style={{padding: '10px'}} onClick={ (e) => handleSubmit(e) } variant="contained" color="primary"><CreateIcon />Lisää</Button>
              <Button style={{padding: '10px'}} onClick={ (e) => tyhjenna(e) } variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
          
    </form>
</Paper>
);
}

export default LisaaRuokaLomake;