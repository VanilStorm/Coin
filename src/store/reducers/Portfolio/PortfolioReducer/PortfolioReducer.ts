import {AllPortfolioActions, IPortfolioCoins} from "../../../../types/portfolioTypes";
import {PortfolioEnums} from "../../../../enums/PortfolioEnums";

interface IPortfolio {
    portfolio: IPortfolioCoins[],
}

const initialState: IPortfolio = {
    portfolio: [],

}

export const PortfolioReducer = (state = initialState, action: AllPortfolioActions): IPortfolio => {
    switch (action.type) {
        case PortfolioEnums.SET_NEW_COIN: {
            return {...state, portfolio: [...state.portfolio, action.payload]};
        }

        default: {
            return state;
        }
    }
}