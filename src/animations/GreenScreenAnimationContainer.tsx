// src/GreenScreenAnimation.tsx

import React, { useEffect } from 'react';
import { Chip, Grid } from '@mui/material';

const GreenScreenAnimationContainer: React.FC = () => {
    const [isTitleShow, setIsTitleShow] = React.useState(true);
    const position = isTitleShow ? 2000 : 350;

    useEffect(() => {
        let timeoutShow: NodeJS.Timeout;

        const getRandomTime = () => {
            // Generate a random time between 5 and 15 seconds (in milliseconds)
            return Math.floor(Math.random() * 10000) + 5000;
        };

        const handleTimeoutShow = () => {
            setIsTitleShow(true);

            // Chip will stay visible for 5 seconds
            setTimeout(() => {
                setIsTitleShow(false);
            }, 5000);

            // Set a new timeout for the next random display
            timeoutShow = setTimeout(handleTimeoutShow, getRandomTime());
        };

        // Set the initial timeout for the first display
        timeoutShow = setTimeout(handleTimeoutShow, getRandomTime());

        return () => {
            clearTimeout(timeoutShow);
        };
    }, [isTitleShow]);

    return (
        <Grid container>
            <Grid item xs={12} sx={{ height: '100vh', position: 'relative' }}>
                <Chip color='primary' label="Le Voxel is a Lie" sx={{ position: 'absolute', bottom: 80, left: position, transition: 'left 0.5s ease-in-out', }} />
            </Grid>
        </Grid>
    );
}

export default GreenScreenAnimationContainer;
