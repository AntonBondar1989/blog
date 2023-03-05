import { StatCovid2Reducer } from './StatCovid2Reducer';
import { StatCovidReducer } from './StatCovidReducer';
import { combineReducers } from "redux"
import { MainReducer } from "./MainReducer"
import { MainDayReducer } from './MainDayReducer';
import { StatRusReducer } from "./StatRusReducer";






export const rootReducer = combineReducers( {
   Main:MainReducer,
   MainDay: MainDayReducer,
   StatRus: StatRusReducer,
   StatCovid: StatCovidReducer,
   StatCovid2: StatCovid2Reducer,
  
   
})

// Для того щоб вицепити стейт
export type RootState = ReturnType<typeof rootReducer>