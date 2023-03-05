import { StatCovid2State, StatCovid2Action, StatCovid2ActionTypes } from './../types/StatCovid2';
import { StatCovidState, StatCovidAction, StatCovidActionTypes } from '../types/StatCovid';




// State
const initialState: StatCovid2State = {
   data2: {},
   loading2: false,
   error2: null
}


export const StatCovid2Reducer = (state = initialState, action: StatCovid2Action): StatCovid2State => {
   switch (action.type) {
      case StatCovid2ActionTypes.FETCH_STAT_COVID2:
         return { loading2: true, error2: null, data2: {} }
      case StatCovid2ActionTypes.FETCH_STAT_COVID2_SUCCESS:
         return { loading2: false, error2: null, data2: action.payload }
      case StatCovid2ActionTypes.FETCH_STAT_COVID2_ERROR:
         return { loading2: false, error2: action.payload, data2: {} }
      default:
         return state;
   }
}