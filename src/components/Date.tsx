import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useActions } from '../hook/useAction';
import Skeleton from '@mui/material/Skeleton';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import '../styles/Main.css'
import { data1, day, month } from '../other/Date';




const Date1: React.FC = () => {

   // change info
   const [info, setInfo] = useState(0);

   // Photo date
   const [photo, setPhoto] = useState('https://picsum.photos/800/900');
   const [numb, setNumb] = useState(0);
   let masNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   var rand = Math.floor(Math.random() * masNumb.length);

   // деструкрурізація (свій хук)
   const { error, loading, data } = useTypedSelector(state => state.Main)

   //замість кодного разу диспатч)
   const { fetchMain } = useActions()

   let onClickd = () => {
      setInfo(info + 1)
      setNumb(rand)
      setPhoto(`https://picsum.photos/80${numb}/90${numb}`)
   }

   useEffect(() => {
      fetchMain(day, month)
   }, [info])

   return (

      <Card className='main_card' style={{ backgroundColor: 'transparent', color: 'wheat' }} >
         {loading === true ?
            <div>
               <Skeleton style={{backgroundColor: 'rgba(128, 128, 128, 0.219)'}} variant="rectangular" width={600} height={210} />
            </div> :
            <CardMedia style={{backgroundColor: 'rgba(128, 128, 128, 0.219)', opacity: '0.9'}}
               sx={{ height: 210 }}
               image={photo}
               title="green iguana"
            />
         }
         <CardContent className='sceleton' style={{ minHeight: '221px' }}>
            <Typography gutterBottom variant="h5" component="div" >
               <span className='title_data_card'>{data1}-this day in history</span> 
            </Typography>
            {loading === true ?
               <div>
                  <Skeleton style={{backgroundColor: 'rgba(128, 128, 128, 0.219)'}} />
                  <Skeleton style={{backgroundColor: 'rgba(128, 128, 128, 0.219)'}} animation="wave" />
                  <Skeleton style={{backgroundColor: 'rgba(128, 128, 128, 0.219)'}} animation={false} />
               </div> :
               <Typography variant="body2" color="#cbd4de">
                  {!error ?
                     <span className='under_title_data_card'>{data}</span>  :
                     <div>Server not responding</div>
                  }
               </Typography>
            }
         </CardContent>
         <CardActions>
            <Button onClick={() => onClickd()} style={{ backgroundColor: 'transparent', color: '#cbd4de', cursor: "pointer", fontSize: "0.5rem", fontFamily: 'Mitr, sans-serif' }} variant="contained" size="small">
               more information...
            </Button>
         </CardActions>
      </Card>

   )
}

export default Date1;