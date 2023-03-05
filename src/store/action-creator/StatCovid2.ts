import { StatCovid2Action, StatCovid2ActionTypes } from './../types/StatCovid2';
import { StatCovidAction, StatCovidActionTypes } from '../types/StatCovid';

import axios from "axios"
import { Dispatch } from "redux"





export const fetchStatCovid2 = () => {
   return async (dispatch: Dispatch<StatCovid2Action>) => {
      try {
         dispatch({ type: StatCovid2ActionTypes.FETCH_STAT_COVID2 })
         const response = await axios.get(`https://covid-19.dataflowkit.com/v1/ukraine`)
         setTimeout(() => {
            dispatch({
               type: StatCovid2ActionTypes.FETCH_STAT_COVID2_SUCCESS,
               payload: response.data
            })
         }, 500)
      } catch (error2) {
         dispatch({
            type: StatCovid2ActionTypes.FETCH_STAT_COVID2_ERROR,
            payload: "Problems with obtaining COVID-19 data"
         })
      }
   }
}



