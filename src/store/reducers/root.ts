import {combineReducers} from "redux";
import {AllCoinsReducer} from "./CoinsReducer/AllCoinsReducer";

export const rootReducer = combineReducers({
    AllCoinsReducer,
})

export type RootState = ReturnType<typeof rootReducer>