





// TS
export interface StatCovid2State {
   data2: any;
   loading2: boolean;
   error2: null | string;
}

export enum StatCovid2ActionTypes {
   FETCH_STAT_COVID2 = 'FETCH_STAT_COVID2',
   FETCH_STAT_COVID2_SUCCESS = 'FETCH_STAT_COVID2_SUCCESS',
   FETCH_STAT_COVID2_ERROR = 'FETCH_STAT_COVID2_ERROR',
}

interface FetchStatCovid2Action {
   type: StatCovid2ActionTypes.FETCH_STAT_COVID2;
}

interface FetchStatCovid2SuccessAction {
   type: StatCovid2ActionTypes.FETCH_STAT_COVID2_SUCCESS;
   payload: any
}

interface FetchStatCovid2ErrorAction {
   type: StatCovid2ActionTypes.FETCH_STAT_COVID2_ERROR;
   payload: string;
}

export type StatCovid2Action = FetchStatCovid2Action | FetchStatCovid2SuccessAction | FetchStatCovid2ErrorAction 
