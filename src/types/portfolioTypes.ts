import {PortfolioEnums} from "../enums/PortfolioEnums";

export interface IPortfolioCoins {
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

interface setNewCoin {
    type: PortfolioEnums.SET_NEW_COIN,
    payload: IPortfolioCoins,
}

export type AllPortfolioActions = setNewCoin;