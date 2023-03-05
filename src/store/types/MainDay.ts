





// TS
export interface MainDayState {
   data: any;
   loading: boolean;
   error: null | string;
}

export enum MainDayActionTypes {
   FETCH_MAIN_DAY = 'FETCH_MAIN_DAY',
   FETCH_MAIN_DAY_SUCCESS = 'FETCH_MAIN_DAY_SUCCESS',
   FETCH_MAIN_DAY_ERROR = 'FETCH_MAIN_DAY_ERROR',
}

interface FetchMainDayAction {
   type: MainDayActionTypes.FETCH_MAIN_DAY;
}

interface FetchMainDaySuccessAction {
   type: MainDayActionTypes.FETCH_MAIN_DAY_SUCCESS;
   payload: any
}

interface FetchMainDayErrorAction {
   type: MainDayActionTypes.FETCH_MAIN_DAY_ERROR;
   payload: string;
}

export type MainDayAction = FetchMainDayAction | FetchMainDaySuccessAction | FetchMainDayErrorAction 
