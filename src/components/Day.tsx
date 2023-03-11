import React, { useEffect, useState, useMemo } from 'react';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useActions } from '../hook/useAction';


import '../styles/Main.css'
import { day, month } from '../other/Date';



// https://calendarific.com/api/v2/holidays?&api_key=8cd86b19144f2ab8bd493f62c2930a71f84ca41e&country=UA&day=22&month=01&year=2023

const Day: React.FC = () => {

 

   // деструкрурізація (свій хук)
   const { error, loading, data } = useTypedSelector(state => state.MainDay)

   // вкладені обьекти(достаємо щоб не отримати андефайн)
   const holidayName = data.response && data.response.holidays && data.response.holidays[0] && data.response.holidays[0].name;
   const holidayDescription = data.response && data.response.holidays && data.response.holidays[0] && data.response.holidays[0].description;

   // замість кодного разу диспатч(хук)
   const { fetchMainDay } = useActions()

   // Кейс місяців
   const monthName = useMemo(() => {
      switch (month) {
         case '01':
            return <span>January</span>;
         case '02':
            return <span>February</span>;
         case '03':
            return <span>March</span>;
         case '04':
            return <span>April</span>;
         case '05':
            return <span>May</span>;
         case '06':
            return <span>June</span>;
         case '07':
            return <span>July</span>;
         case '08':
            return <span>August</span>;
         case '09':
            return <span>September</span>;
         case '10':
            return <span>October</span>;
         case '11':
            return <span>November</span>;
         case '12':
            return <span>December</span>;
         default:
            return day;
      }
   }, [month]);

   useEffect(() => {
      fetchMainDay(day, month)
   }, [])

   return (
      <div className='main_day'>
         <h1 className='main_day_title'><span>{monthName}</span> {day} </h1>
         <div className='main_day_undertitle'>{holidayName}</div>
         <div className='under_main_day_description'>{holidayDescription === undefined ? "Welcome to website. Hope you don't get bored." : holidayDescription}</div>
      </div>
   )
}

export default Day;