import React from 'react';
import storeImage from '../../../img/retail-store-icon.png';
import { Paper } from '@material-ui/core';

export default function Store() {

    return (
        <div>
            <Paper variant="outlined">
               <img src={storeImage} alt='Store'/>
            </Paper>
        </div>
    );
}