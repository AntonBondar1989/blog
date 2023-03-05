





// TS
export interface StatRusState {
   data: any;
   loading: boolean;
   error: null | string;
}

export enum StatRusActionTypes {
   FETCH_STAT_RUS = 'FETCH_STAT_RUS',
   FETCH_STAT_RUS_SUCCESS = 'FETCH_STAT_RUS_SUCCESS',
   FETCH_STAT_RUS_ERROR = 'FETCH_STAT_RUS_ERROR',
}

interface FetchStatRusAction {
   type: StatRusActionTypes.FETCH_STAT_RUS;
}

interface FetchStatRusSuccessAction {
   type: StatRusActionTypes.FETCH_STAT_RUS_SUCCESS;
   payload: any
}

interface FetchStatRusErrorAction {
   type: StatRusActionTypes.FETCH_STAT_RUS_ERROR;
   payload: string;
}

export type StatRusAction = FetchStatRusAction | FetchStatRusSuccessAction | FetchStatRusErrorAction 
