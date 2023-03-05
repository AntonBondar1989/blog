import { StatCovidState, StatCovidAction, StatCovidActionTypes } from './../types/StatCovid';




// State
const initialState: StatCovidState = {
   data: {},
   loading: false,
   error: null
}


export const StatCovidReducer = (state = initialState, action: StatCovidAction): StatCovidState => {
   switch (action.type) {
      case StatCovidActionTypes.FETCH_STAT_COVID:
         return { loading: true, error: null, data: {} }
      case StatCovidActionTypes.FETCH_STAT_COVID_SUCCESS:
         return { loading: false, error: null, data: action.payload }
      case StatCovidActionTypes.FETCH_STAT_COVID_ERROR:
         return { loading: false, error: action.payload, data: {} }
      default:
         return state;
   }
}