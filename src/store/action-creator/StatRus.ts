import { StatRusAction, StatRusActionTypes } from './../types/StatRus';
import axios from "axios"
import { Dispatch } from "redux"





export const fetchStatRus = (day: String, month: String) => {
   return async (dispatch: Dispatch<StatRusAction>) => {
      try {
         dispatch({ type: StatRusActionTypes.FETCH_STAT_RUS })
         const response = await axios.get(`https://russianwarship.rip/api/v1/statistics/2023-${month}-${day}`)
         setTimeout(() => {
            dispatch({
               type: StatRusActionTypes.FETCH_STAT_RUS_SUCCESS,
               payload: response.data
            })
         }, 500)
      } catch (error) {
         dispatch({
            type: StatRusActionTypes.FETCH_STAT_RUS_ERROR,
            payload: "Произошла ошибка при загрузке инфы по статистике потерь рашистов"
         })
      }
   }
}



