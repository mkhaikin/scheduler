import React from 'react';
import report1Image from '../../../img/Report1.png';
import { Paper } from '@material-ui/core';

export default function Report1() {

    return (
        <div>
            <Paper variant="outlined">
               <img src={report1Image} alt='Report 1'/>
            </Paper>
        </div>
    );
}