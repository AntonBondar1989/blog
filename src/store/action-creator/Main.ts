import axios from "axios"
import { Dispatch } from "redux"
import { MainAction, MainActionTypes } from "../types/Main"





export const fetchMain = (day: String, month: String) => {
   return async (dispatch: Dispatch<MainAction>) => {
      try {
         dispatch({ type: MainActionTypes.FETCH_MAIN })
         const response = await axios.get(`http://numbersapi.com/${month}/${day}/date`)
         setTimeout(() => {
            dispatch({
               type: MainActionTypes.FETCH_MAIN_SUCCESS,
               payload: response.data
            })
         }, 500)
      } catch (error) {
         dispatch({
            type: MainActionTypes.FETCH_MAIN_ERROR,
            payload: "Произошла ошибка при загрузке инфы про этот день в истории"
         })
      }
   }
}



