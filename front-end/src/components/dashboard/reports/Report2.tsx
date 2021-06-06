import React from 'react';
import report2Image from '../../../img/Report2.png';
import { Paper } from '@material-ui/core';

export default function Report2() {

    return (
        <div>
            <Paper variant="outlined">
               <img src={report2Image} alt='Report 2'/>
            </Paper>
        </div>
    );
}