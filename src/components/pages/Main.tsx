import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Date1 from '../Date';
import Day from '../Day';


import '../../styles/Main.css'
import TomatoTimer from '../Tomato';
import DonateStrip from '../DonateStrip';




const Main: React.FC = () => {

   useEffect(() => {

   }, [])

   return (
      <div className='main'>
         <Box sx={{ flexGrow: 10 }}>
            <Grid container spacing={0} style={{ boxSizing: "border-box" }}>
               <Grid className='grid_column' item xs={12} md={3}>
                  <Date1 />
               </Grid>
               <Grid className='grid_column mainn' item xs={12} md={6}>
                  <Day />
               </Grid>
               <Grid className='grid_column vid_box' item xs={12} md={3}>
                  <TomatoTimer />
               </Grid>
            </Grid>
         </Box>
         <DonateStrip />
      </div>

   )
}

export default Main;