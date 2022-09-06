import {AllCoinsActionTypes} from "../enums/AllCoinsEnums";

export interface IAllCoins {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
}

export interface AllCoinsFetch {
    data: IAllCoins[]
}

interface fetchAllCoins {
    type: AllCoinsActionTypes.FETCH_ALL_COINS,
    payload: IAllCoins[],
}

interface coinsFetching {
    type: AllCoinsActionTypes.FETCHING,
}

interface coinsError {
    type: AllCoinsActionTypes.FETCH_COINS_ERROR,
}




export type AllCoinsActions = fetchAllCoins | coinsFetching | coinsError;