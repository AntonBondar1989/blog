import { StatRusState, StatRusAction, StatRusActionTypes } from './../types/StatRus';
import { MainAction, MainActionTypes, MainState } from "../types/Main";



// State
const initialState: StatRusState = {
   data: {},
   loading: false,
   error: null
}


export const StatRusReducer = (state = initialState, action: StatRusAction): StatRusState => {
   switch (action.type) {
      case StatRusActionTypes.FETCH_STAT_RUS:
         return { loading: true, error: null, data: {} }
      case StatRusActionTypes.FETCH_STAT_RUS_SUCCESS:
         return { loading: false, error: null, data: action.payload }
      case StatRusActionTypes.FETCH_STAT_RUS_ERROR:
         return { loading: false, error: action.payload, data: {} }
      default:
         return state;
   }
}