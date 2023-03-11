import { useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useActions } from "../hook/useAction";
import { useTypedSelector } from "../hook/useTypedSelector";
import { data1 } from "../other/Date";





const Covid: React.FC = () => {

   // деструкрурізація (свій хук)
   const { error, loading, data } = useTypedSelector(state => state.StatCovid)
   const { error2, loading2, data2 } = useTypedSelector(state => state.StatCovid2)

   const data2arr = Object.values(data2)

   const country = data.Countries && data.Countries[185]
   const countryName = data.Countries && data.Countries[185] && data.Countries && data.Countries[185].Country
   const countryTotalConfirmed = data.Countries && data.Countries[185] && data.Countries && data.Countries[185].TotalConfirmed
   const countryNewConfirmed = data.Countries && data.Countries[185] && data.Countries && data.Countries[185].NewConfirmed
   const countryNewDeaths = data.Countries && data.Countries[185] && data.Countries && data.Countries[185].NewDeaths
   const countryTotalDeaths = data.Countries && data.Countries[185] && data.Countries && data.Countries[185].TotalDeaths
   const countryTotalRecovered: any = data2arr && data2arr[data2arr.length - 1]
   const countryTotalRecoveredNumb = countryTotalRecovered !== undefined && parseInt(countryTotalRecovered.replace(/[\s.,%]/g, ''))




   //замість кодного разу диспатч)
   const { fetchStatCovid, fetchStatCovid2 } = useActions()

   // PIE
   ChartJS.register(ArcElement, Tooltip, Legend);
   const dataPie = {
      labels: [`Total Confirmed: ${countryTotalConfirmed}`, `New Confirmed: ${countryNewConfirmed}`, `Total Deaths: ${countryTotalDeaths}`, `New Deaths: ${countryNewDeaths}`, `Total Recovered: ${countryTotalRecoveredNumb}`],
      datasets: [
         {

            label: '',
            data: [countryTotalConfirmed, countryNewConfirmed, countryTotalDeaths, countryNewDeaths, countryTotalRecoveredNumb],
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               '#34313156',
               '#8e8d8d',
               '#738e7aa6',
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(255, 206, 86, 1)',
               '#060202',
               '#343131',
               '#27F260',

            ],

            borderWidth: 1,
         },
      ],
   };


   useEffect(() => {
      fetchStatCovid2()
      fetchStatCovid()

   }, [])



   return (
      <Card className='cov_stat_card' sx={{ minWidth: 275 }}>
         <CardContent>
            <Typography className='title_cov_stat' variant="h4" gutterBottom>
               Covid -19 statistics {data1}
               {countryName === undefined ? <div style={{ marginTop: '50%' }}>Data display problem. Try later...</div> :
                  <div style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
                     <div>{countryName}</div>
                     <Pie

                        className="pie"
                        data={dataPie} />
                  </div>
               }
            </Typography>
            <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8"><div style={{ textAlign: "center" }}>Data provided by this resource</div></a>
         </CardContent>
      </Card>
   )
}

export default Covid;