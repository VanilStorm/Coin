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
    qnt?: string | number,
}

export interface AllCoinsFetch {
    data: IAllCoins[]
}

interface fetchAllCoins {
    type: AllCoinsActionTypes.FETCH_ALL_COINS,
    payload: IAllCoins[],
}

interface fetchSingleCoin {
    type: AllCoinsActionTypes.FETCH_SINGLE_COIN,
    payload: IAllCoins,
}

interface coinsFetching {
    type: AllCoinsActionTypes.FETCHING,
}

interface coinsError {
    type: AllCoinsActionTypes.FETCH_COINS_ERROR,
}

interface defaultCoin {
    type: AllCoinsActionTypes.DEFAULT_SINGLE_COIN,
}




export type AllCoinsActions = fetchAllCoins | fetchSingleCoin | coinsFetching | coinsError | defaultCoin;