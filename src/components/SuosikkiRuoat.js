import React, { useState } from 'react';
import uuid from 'react-uuid';
import HaeRuoat from '../components/HaeRuoat';
import LisaaRuokaLomake from '../components/LisaaRuokaLomake';

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
import { Container } from '@material-ui/core';

  
function SuosikkiRuoat(props) {
  return(
    <div>
      <Paper style={{margin: '20px'}}>
        <Typography variant={"h1"} style={{margin: '20px'}}>Suosikkiruoat</Typography>
          <List style={{margin: '20px'}}>
            { props.ruoat.map (ruoka => {
              return( 
                <ListItem key={ruoka.id}>
                  { ruoka.nimi  + ' - ' + ', hinta: ' + ruoka.hinta + ', allergeenit: ' + ruoka.allergeenit + ', hiilarit: ' + ruoka.hiilarit + ', proteiini: ' + ruoka.proteiini }
                </ListItem> )
               }) 
            }
        </List>
      </Paper>
    </div>
    )
}

export default SuosikkiRuoat;