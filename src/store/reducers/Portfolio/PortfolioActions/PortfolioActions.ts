import {Dispatch} from "react";
import {AllPortfolioActions, IPortfolioCoins} from "../../../../types/portfolioTypes";
import {PortfolioEnums} from "../../../../enums/PortfolioEnums";

export const setNewCoin = (value: IPortfolioCoins) => {
    return (dispatch: Dispatch<AllPortfolioActions>) => {
        dispatch({type: PortfolioEnums.SET_NEW_COIN, payload: value})
    }
}