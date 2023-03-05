import { MainDayAction, MainDayActionTypes, MainDayState } from "../types/MainDay";



// State
const initialState: MainDayState = {
   data: {},
   loading: false,
   error: null
}


export const MainDayReducer = (state = initialState, action: MainDayAction): MainDayState => {
   switch (action.type) {
      case MainDayActionTypes.FETCH_MAIN_DAY:
         return { loading: true, error: null, data: String }
      case MainDayActionTypes.FETCH_MAIN_DAY_SUCCESS:
         return { loading: false, error: null, data: action.payload }
      case MainDayActionTypes.FETCH_MAIN_DAY_ERROR:
         return { loading: false, error: action.payload, data: String }
      default:
         return state;
   }
}