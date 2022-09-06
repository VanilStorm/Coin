import {Dispatch} from "react";
import {AllCoinsActions, AllCoinsFetch,} from "../../../types/allCoins";
import axios from "axios";
import {AllCoinsActionTypes} from "../../../enums/AllCoinsEnums";

export const fetchAllCoins = () => {
    return async (dispatch: Dispatch<AllCoinsActions>) => {
        try {
            dispatch({type: AllCoinsActionTypes.FETCHING})
            const res = await axios.get<AllCoinsFetch>('https://api.coincap.io/v2/assets?limit=100');
            dispatch({type: AllCoinsActionTypes.FETCH_ALL_COINS, payload: res.data.data})
        } catch (e) {
            dispatch({type: AllCoinsActionTypes.FETCH_COINS_ERROR})
            console.log(e)
        }
    }
}
