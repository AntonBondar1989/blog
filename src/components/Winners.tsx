import { Card, CardContent, Typography } from "@mui/material";








const Winners: React.FC = () => {



   return (
      <Card className='rus_stat_card' sx={{ minWidth: 275 }}>
         <CardContent>
            <Typography className='title_rus_stat' variant="h4" gutterBottom>
               Interesting information coming soon
            </Typography>
         </CardContent>
      </Card>
   )
}

export default Winners;