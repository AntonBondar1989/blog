import axios from "axios"
import { Dispatch } from "redux"
import { MainDayAction, MainDayActionTypes } from "../types/MainDay"





export const fetchMainDay = (day: String, month: String) => {
   return async (dispatch: Dispatch<MainDayAction>) => {
      try {
         dispatch({ type: MainDayActionTypes.FETCH_MAIN_DAY })
         const response = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=8cd86b19144f2ab8bd493f62c2930a71f84ca41e&country=UA&day=${day}&month=${month}&year=2023`)
         setTimeout(() => {
            dispatch({
               type: MainDayActionTypes.FETCH_MAIN_DAY_SUCCESS,
               payload: response.data
            })
         }, 500)
      } catch (error) {
         dispatch({
            type: MainDayActionTypes.FETCH_MAIN_DAY_ERROR,
            payload: "Произошла ошибка при загрузке инфы про этот день праздник в украине"
         })
      }
   }
}



