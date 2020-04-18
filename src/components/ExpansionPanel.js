import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function ValintaPaneeli() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return(
        <div>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Valitse päivämäärä"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }} />
          </MuiPickersUtilsProvider>
          <ExpansionPanel style={{width: '300px'}}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Ruokien allergiatiedot</Typography>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    (G) Gluteeniton, (L) Laktoositon, (VL) Vähälaktoosinen, (M) Maidoton, (*) Voi hyvin, (Veg) Soveltuu vegaaniruokavalioon, (VS) Sis. tuoretta valkosipulia, (A) Sis. allergeeneja
                    </Typography>
                </ExpansionPanelDetails>
        </ExpansionPanel>

        </div>
    )
}

export default ValintaPaneeli;