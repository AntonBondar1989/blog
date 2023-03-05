import { StatCovidAction, StatCovidActionTypes } from './../types/StatCovid';
import { StatRusAction, StatRusActionTypes } from '../types/StatRus';
import axios from "axios"
import { Dispatch } from "redux"





export const fetchStatCovid = () => {
   return async (dispatch: Dispatch<StatCovidAction>) => {
      try {
         dispatch({ type: StatCovidActionTypes.FETCH_STAT_COVID })
         const response = await axios.get(`https://api.covid19api.com/summary`)
         setTimeout(() => {
            dispatch({
               type: StatCovidActionTypes.FETCH_STAT_COVID_SUCCESS,
               payload: response.data
            })
         }, 500)
      } catch (error) {
         dispatch({
            type: StatCovidActionTypes.FETCH_STAT_COVID_ERROR,
            payload: "Problems with obtaining COVID-19 data"
         })
      }
   }
}



