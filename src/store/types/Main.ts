





// TS
export interface MainState {
   data: any;
   loading: boolean;
   error: null | string;
  
}

export enum MainActionTypes {
   FETCH_MAIN = 'FETCH_MAIN',
   FETCH_MAIN_SUCCESS = 'FETCH_MAIN_SUCCESS',
   FETCH_MAIN_ERROR = 'FETCH_MAIN_ERROR',
}

interface FetchMainAction {
   type: MainActionTypes.FETCH_MAIN;
}

interface FetchMainSuccessAction {
   type: MainActionTypes.FETCH_MAIN_SUCCESS;
   payload: any
}

interface FetchMainErrorAction {
   type: MainActionTypes.FETCH_MAIN_ERROR;
   payload: string;
}

export type MainAction = FetchMainAction | FetchMainSuccessAction | FetchMainErrorAction 
