//file for each card of list

import React from 'react';
import './Components.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';





const Trellocard = ({ text }) => {
    return (
        <div className="cardlist" style={styles.cardContainer}>
            <Card variant="outlined">
                <CardContent>
                <Typography gutterBottom>
                {text}
                </Typography>

                </CardContent>
            </Card>
        </div>
    )
}
const styles = {
    cardContainer: {
      marginBottom: 8,
    },
  };

export default Trellocard
