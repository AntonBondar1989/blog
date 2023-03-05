





// TS
export interface StatCovidState {
   data: any;
   loading: boolean;
   error: null | string;
}

export enum StatCovidActionTypes {
   FETCH_STAT_COVID = 'FETCH_STAT_COVID',
   FETCH_STAT_COVID_SUCCESS = 'FETCH_STAT_COVID_SUCCESS',
   FETCH_STAT_COVID_ERROR = 'FETCH_STAT_COVID_ERROR',
}

interface FetchStatCovidAction {
   type: StatCovidActionTypes.FETCH_STAT_COVID;
}

interface FetchStatCovidSuccessAction {
   type: StatCovidActionTypes.FETCH_STAT_COVID_SUCCESS;
   payload: any
}

interface FetchStatCovidErrorAction {
   type: StatCovidActionTypes.FETCH_STAT_COVID_ERROR;
   payload: string;
}

export type StatCovidAction = FetchStatCovidAction | FetchStatCovidSuccessAction | FetchStatCovidErrorAction 
