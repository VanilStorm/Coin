import {AllCoinsActions, IAllCoins} from "../../../../types/allCoins";
import {AllCoinsActionTypes} from "../../../../enums/AllCoinsEnums";

interface ICoins {
    allCoins: IAllCoins[],
    singleCoin: IAllCoins,
    loading: boolean,
    error: boolean,
}

const initialState: ICoins = {
    allCoins: [],
    singleCoin: {
        id: '',
        rank: '',
        symbol: '',
        name: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        volumeUsd24Hr: '',
        priceUsd: '',
    },
    loading: false,
    error: false,

}

export const AllCoinsReducer = (state = initialState, action: AllCoinsActions): ICoins => {
    switch (action.type) {
        case AllCoinsActionTypes.FETCHING: {
            return {...state, loading: true}
        }

        case AllCoinsActionTypes.FETCH_COINS_ERROR: {
            return {...state, error: true, loading: false}
        }

        case AllCoinsActionTypes.FETCH_ALL_COINS: {
            return {...state, allCoins: action.payload, loading: false}
        }

        case AllCoinsActionTypes.FETCH_SINGLE_COIN: {
            return {...state, singleCoin: action.payload, loading: false}
        }

        case AllCoinsActionTypes.DEFAULT_SINGLE_COIN: {
            return {...state, singleCoin: {
                    id: '',
                    rank: '',
                    symbol: '',
                    name: '',
                    supply: '',
                    maxSupply: '',
                    marketCapUsd: '',
                    volumeUsd24Hr: '',
                    priceUsd: '',
                }}
        }

        default: {
            return state;
        }
    }
}