import { MainAction, MainActionTypes, MainState } from "../types/Main";



// State
const initialState: MainState = {
   data: String,
   loading: false,
   error: null,
   
}


export const MainReducer = (state = initialState, action: MainAction): MainState => {
   switch (action.type) {
      case MainActionTypes.FETCH_MAIN:
         return { loading: true, error: null, data: String }
      case MainActionTypes.FETCH_MAIN_SUCCESS:
         return { loading: false, error: null, data: action.payload }
      case MainActionTypes.FETCH_MAIN_ERROR:
         return { loading: false, error: action.payload, data: String }
      default:
         return state;
   }
}