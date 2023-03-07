import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useActions } from '../hook/useAction';

import '../styles/StatisticPage.css'
import { Card, CardContent, Typography } from '@mui/material';
import { day, month, year } from '../other/Date';




const Rus: React.FC = () => {


   // деструкрурізація (свій хук)
   const { error, loading, data } = useTypedSelector(state => state.StatRus)

   //замість кодного разу диспатч)
   const { fetchStatRus } = useActions()

   // вкладені обьекти(достаємо щоб не отримати андефайн)
   const personnel_units: number = data.data && data.data.stats && data.data.stats.personnel_units
   const tanks = data.data && data.data.stats && data.data.stats.tanks
   const armoured_fighting_vehicles = data.data && data.data.stats && data.data.stats.armoured_fighting_vehicles
   const artillery_systems = data.data && data.data.stats && data.data.stats.artillery_systems
   const mlrs = data.data && data.data.stats && data.data.stats.mlrs
   const aa_warfare_systems = data.data && data.data.stats && data.data.stats.aa_warfare_systems
   const planes = data.data && data.data.stats && data.data.stats.planes
   const helicopters = data.data && data.data.stats && data.data.stats.helicopters
   const vehicles_fuel_tanks = data.data && data.data.stats && data.data.stats.vehicles_fuel_tanks
   const warships_cutters = data.data && data.data.stats && data.data.stats.warships_cutters
   const cruise_missiles = data.data && data.data.stats && data.data.stats.cruise_missiles
   const uav_systems = data.data && data.data.stats && data.data.stats.uav_systems
   const special_military_equip = data.data && data.data.stats && data.data.stats.special_military_equip
   const atgm_srbm_systems = data.data && data.data.stats && data.data.stats.atgm_srbm_systems

   // state units
   const [personnelUnits, setPersonnelUnits] = useState(0);
   const [ruTanks, setRuTanks] = useState(0);
   const [armouredFightingVehicles, setArmouredFightingVehicles] = useState(0);
   const [artillerySystems, setArtillerySystems] = useState(0);
   const [aaWarfareSystems, setAaWarfareSystems] = useState(0);
   const [airplanes, setAirplanes] = useState(0);
   const [helicoptersFly, setHelicoptersFly] = useState(0);
   const [warshipsCutters, setWarshipsCutters] = useState(0);
   const [cruiseMissiles, setCruiseMissiles] = useState(0);
   const [uavSystems, setUavSystems] = useState(0);
   const [specialMilitaryEquip, setSpecialMilitaryEquip] = useState(0);


   // state count units
   personnelUnits !== personnel_units && setTimeout(setPersonnelUnits, 1, personnelUnits + 1)
   ruTanks !== tanks && setTimeout(setRuTanks, 1, ruTanks + 1)
   armouredFightingVehicles !== armoured_fighting_vehicles && setTimeout(setArmouredFightingVehicles, 1, armouredFightingVehicles + 1)
   artillerySystems !== artillery_systems && setTimeout(setArtillerySystems, 1, artillerySystems + 1)
   aaWarfareSystems !== aa_warfare_systems && setTimeout(setAaWarfareSystems, 1, aaWarfareSystems + 1)
   airplanes !== planes && setTimeout(setAirplanes, 1, airplanes + 1)
   helicoptersFly !== helicopters && setTimeout(setHelicoptersFly, 1, helicoptersFly + 1)
   warshipsCutters !== warships_cutters && setTimeout(setWarshipsCutters, 1, warshipsCutters + 1)
   cruiseMissiles !== cruise_missiles && setTimeout(setCruiseMissiles, 1, cruiseMissiles + 1)
   uavSystems !== uav_systems && setTimeout(setUavSystems, 1, uavSystems + 1)
   specialMilitaryEquip !== special_military_equip && setTimeout(setSpecialMilitaryEquip, 1, specialMilitaryEquip + 1)



   useEffect(() => {
      fetchStatRus(day, month)
   }, [])

   return (
      <Card className='rus_stat_card' sx={{ minWidth: 275 }}>
         <CardContent>
            <Typography className='title_rus_stat' variant="h4" gutterBottom>
               total losses of the enemy as of {day}.{month}.{year}
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/units.png' alt="" />&nbsp;
               <span>personnel units -</span>  <span style={personnelUnits == personnel_units ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{personnelUnits}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/tanks.png' alt="" />&nbsp;
               <span >tanks - </span><span style={ruTanks == tanks ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{ruTanks}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/bmp.png' alt="" />&nbsp;
               <span >armoured vehicles - </span><span style={armouredFightingVehicles == armoured_fighting_vehicles ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{armouredFightingVehicles}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/artileria.png' alt="" />&nbsp;
               <span >artillery systems - </span><span style={artillerySystems == artillery_systems ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{artillerySystems}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/ppo.png' alt="" />&nbsp;
               <span > aa warfare systems - </span><span style={aaWarfareSystems == aa_warfare_systems ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{aaWarfareSystems}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/fly.png' alt="" />&nbsp;
               <span >planes - </span><span style={airplanes == planes ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{airplanes}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/helic.png' alt="" />&nbsp;
               <span >helicopters - </span><span style={helicoptersFly == helicopters ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{helicoptersFly}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/sea.png' alt="" />&nbsp;
               <span >warships - </span><span style={warshipsCutters == warships_cutters ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{warshipsCutters}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/raketa.png' alt="" />&nbsp;
               <span >cruise missiles - </span><span style={cruiseMissiles == cruise_missiles ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{cruiseMissiles}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/bpla.png' alt="" />&nbsp;
               <span >uav systems - </span><span style={uavSystems == uav_systems ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{uavSystems}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <img src='/img/statistics/special.png' alt="" />&nbsp;
               <span >special military equip - </span><span style={specialMilitaryEquip == special_military_equip ? { color: "red", fontFamily: `fantasy` } : { color: "rgb(180, 73, 11)", fontFamily: `fantasy` }}>{specialMilitaryEquip}</span>
            </Typography>
            <Typography className='rus_stat' variant="h5" component="div">
               <div style={{ fontSize: '1rem', textAlign: "center" }}> <a href="https://facebook.com/story.php?story_fbid=pfbid036Z9rE9ewcJu33N6Dyj4SzMgmjd2LKWNGj4xDrQKmvox3yiyH7rUfq7rgA3SmXxZEl&id=100069073844828&eav=AfYVnF1OdQkrszlyxujFQ0fdfP8j5Su4zk-4Z4g4ZvoPUZNlL8prJwgG1cBe0PhgdDI&m_entstream_source=timeline&paipv=0">official data of the Ministry of Defense of Ukraine</a></div>
            </Typography>
         </CardContent>
      </Card>
   )
}


export default Rus;