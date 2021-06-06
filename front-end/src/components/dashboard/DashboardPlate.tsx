import React from 'react';
import dashboardImage from '../../img/CRMdashboard.png';
import { Paper } from '@material-ui/core';

export default function DashboardPlate() {

    return (
        <div>
            <Paper variant="outlined">
               <img src={dashboardImage} alt='Dashboard'/>
            </Paper>
        </div>
    );
}