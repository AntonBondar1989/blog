import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from '../store/action-creator/';





// суть у тому що мы звязуємо  усі actioncreator з цим діспатч і більше діспатч нам не знадобиться (полегшуємо собі роботу)
export const useActions = () => {
   const dispatch = useDispatch();
   return bindActionCreators(ActionCreators, dispatch)
}