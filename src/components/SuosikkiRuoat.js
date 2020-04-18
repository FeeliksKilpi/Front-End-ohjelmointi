import React from 'react';
import { Typography, Paper, List, ListItem } from '@material-ui/core';

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