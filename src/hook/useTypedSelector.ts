import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer";






// Свій хук для того щоб вицепити стейт типизований (відслідкую ще де rootState)
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;