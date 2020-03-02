import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Container } from '@material-ui/core';

const marks = [
    {
      value: 0,
      label: 'Zero',
    },
    {
      value: 1,
      label: 'One',
    },
    {
      value: 2,
      label: 'Two',
    },
    {
      value: 3,
      label: 'Three',
    },
    {
        value: 4,
        label: 'Four',
    },
    {
        value: 5,
        label: 'Five',
    },
  ];

function Slideri() {
    return(
        <div>
            <Paper elevation={3} style={{width: 500, padding: '40px', margin: '40px'}}>
                <TextField label='Suorittajan nimi' name='nimi' fullWidth variant="outlined"/>
                    <Typography id="discrete-slider-restrict" gutterBottom style={{padding: '10px'}}>
                        Arvostelu
                    </Typography>
                        <Slider
                            defaultValue={0}
                            aria-labelledby="discrete-slider-restrict"
                            step={null}
                            valueLabelDisplay="off"
                            marks={marks}
                            max={5}
                            min={0}
                        />
                <Container style={{padding: '10px'}}>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch value="checked" />
                                    }
                            label="Suosittele kaverille">
                        </FormControlLabel>
                    </FormGroup>
                <ButtonGroup color="secondary" aria-label="outlined primary button group" fullWidth="true">
                    <Button>Arttu</Button>
                    <Button>Felix</Button>
                    <Button>Nikke</Button>
                </ButtonGroup>
            </Container>
        </Paper>
    </div>
    )
}

export default Slideri;