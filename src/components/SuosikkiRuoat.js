import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
  
function SuosikkiRuoat() {
  const [ruoka, setValues] = useState([{
      nimi: '',
      kalorit: '',
      rasva: '',
      hiilarit: '',
      proteiini: ''
  }]);

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
      setValues({
          ...ruoka,
          [e.target.name]: e.target.value
      });

      setViesti('');
  };

  const lisaaRuoka = (e) => {
    e.preventDefault();

    setValues({
        nimi: '',
        kalorit: '',
        rasva: '',
        hiilarit: '',
        proteiini: ''
    });
    setViesti('Lisätty');
  };

  const tyhjenna = (e) => {
    e.preventDefault();

    setValues({
        nimi: '',
        kalorit: '',
        rasva: '',
        hiilarit: '',
        proteiini: ''
    });
    setViesti('tyhjennetty');
  };

    let stringSafka = JSON.stringify(ruoka);


    return(
    <div>
      <Typography variant={"h1"}>Suosikkiruoat</Typography>
      { stringSafka }
      <Paper style={ {padding: '10px', margin: '30px'} } >
          <form>
              <TextField label='Nimi' name='nimi' value={ ruoka.nimi }
              onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} autoFocus/>
              <TextField label='Kalorit' name='kalorit' value={ ruoka.kalorit }
              onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
              <TextField label='Rasva' name='rasva' value={ ruoka.rasva }
              onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
              <TextField label='Hiilarit' name='hiilarit' value={ ruoka.hiilarit }
              onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
              <TextField label='Proteiini' name='proteiini' value={ ruoka.proteiini }
              onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
          
            <div style = {{textAlign: 'center'}}>
              <Button onClick={ (e) => lisaaRuoka(e) } variant="contained" color="primary" style={{marginRight:20}}><CreateIcon />Lisää</Button>
              <Button onClick={ (e) => tyhjenna(e) } variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
            </div>
        </form>
            <Typography style={{marginTop: 20}}>{ viesti }</Typography>
    </Paper>
    </div>
    )
}

export default SuosikkiRuoat;