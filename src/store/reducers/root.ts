import {combineReducers} from "redux";
import {AllCoinsReducer} from "./AllCoinsReducer/AllCoinsReducer";

export const rootReducer = combineReducers({
    AllCoinsReducer,
})

export type RootState = ReturnType<typeof rootReducer>