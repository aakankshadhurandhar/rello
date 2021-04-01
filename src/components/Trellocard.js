//file for each card of list

import React from 'react';
import './Components.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';




const Trellocard = () => {
    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                <Typography gutterBottom>
                card
                </Typography>

                </CardContent>
            </Card>
        </div>
    )
}

export default Trellocard
