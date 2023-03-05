import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'


import '../../styles/StatisticPage.css'
import Covid from '../Covid';
import Rus from '../Rus';
import Winners from '../Winners';





const StatisticsPage: React.FC = () => {

   useEffect(() => {

   }, [])


   return (
      <div className='statistic_page'>
         <Box sx={{ flexGrow: 10 }}>
            <Grid container spacing={2} justifyContent="center" style={{ boxSizing: "border-box" }}>
               <Grid className='grid_column_stat' item xs={12} md={12}>
                  {/* <Rus /> */}
               </Grid>
               <Grid className='grid_column_stat' item xs={12} md={12}>
                  <Winners />
               </Grid>
               <Grid className='grid_column_stat' item xs={12} md={12}>
                  <Covid />
               </Grid> 
            </Grid>

         </Box>
      </div>
   )
}

export default StatisticsPage;