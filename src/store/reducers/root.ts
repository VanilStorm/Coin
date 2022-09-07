import {combineReducers} from "redux";
import {AllCoinsReducer} from "./Coins/CoinsReducer/AllCoinsReducer";
import {PortfolioReducer} from "./Portfolio/PortfolioReducer/PortfolioReducer";

export const rootReducer = combineReducers({
    AllCoinsReducer,
    PortfolioReducer
})

export type RootState = ReturnType<typeof rootReducer>