import React from 'react';

/* ---------------------------------- grid ---------------------------------- */
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

/* -------------------------------- component ------------------------------- */
import { ParticipantCard } from '../../ParticipantCard/ParticipantCard';
import { IСardContent, cardsContent } from '../../ParticipantCard/participantCardData'

/* ---------------------------------- style --------------------------------- */
import './InfoPage.conponent.css'
import { Container } from '@mui/system';
import { Timer } from '../../Timer/Timer';




const InfoPage: React.FC = () => {


   return (
      <div className='info_page'>
         <div>
            <Timer />
         </div>
         <Container fixed >
            <Grid container spacing={4}  >
               {cardsContent.map(cardContent => (
                  <Grid item xs={12} sm={6} md={3} key={cardContent.id}>
                     <ParticipantCard cardContent={cardContent} />
                  </Grid>
               ))}
            </Grid>
         </Container>

      </div>
   )
}

export default InfoPage;

