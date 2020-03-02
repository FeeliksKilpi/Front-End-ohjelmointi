import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Koulutusohjelmat(props) {
    return(
        <Grid container spacing={3}>
            { props.koulutukset.map( koulutus => {
                    return(
                        <Grid item key={koulutus.id}>
                            <Card style={{minWidth: 150, minHeigth: 200}}>
                            <CardActions style={{fontSize: 12}}>
                                    <IconButton color='primary'><AccountCircleIcon />näytä</IconButton>
                                    <IconButton color='secondary'><DeleteIcon />poista</IconButton>      
                                </CardActions>
                                <CardHeader
                                    title={koulutus.otsikko}
                                    subheader={koulutus.paiva}>
                                </CardHeader>
                                <CardContent>
                                {
                                    koulutus.picture ?
                                    <CardMedia image={koulutus.picture} title={koulutus.otsikko} style={{width: 200, height: 150 }}/>
                                    : <Typography>Ei kuvaa</Typography>
                                }
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )}



export default Koulutusohjelmat;