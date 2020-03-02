import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function MatkalistaMUI (props) {
  
  return (
    <Grid container spacing={4}>
    { 
      props.matkat.map( matka => {
        return(
          <Grid item key={matka.id}>
            <Card style={ { minWidth: 150, minHeigth: 200 } }>
              <CardHeader>
                title='testi'
                subheader={matka.paiva}
              </CardHeader>
              <CardContent>
                { matka.kuva ?
                  <CardMedia image={matka.kuva} title={matka.otsikko} style={{width: 150, heigth: 200 }}/>

                  :
                  <Typography style={ {maxWidth: 150, maxHeigth: 200 } }>
                    Ei kuvaa
                  </Typography> }
              </CardContent>
            </Card>
          </Grid>
        )}
  )}
  </Grid>
)}


export default MatkalistaMUI;
