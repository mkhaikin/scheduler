import React from 'react';
import help1Image from '../../../img/Documenthelp.png';
import { Paper } from '@material-ui/core';

export default function Help1() {

    return (
        <div>
            <Paper variant="outlined">
               <img src={help1Image} alt='Help 1'/>
            </Paper>
        </div>
    );
}