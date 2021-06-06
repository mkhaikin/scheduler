import React from 'react';
import help2Image from '../../../img/Supporthelp.jpg';
import { Paper } from '@material-ui/core';

export default function Help2() {

    return (
        <div>
            <Paper variant="outlined">
               <img src={help2Image} alt='Help 2'/>
            </Paper>
        </div>
    );
}