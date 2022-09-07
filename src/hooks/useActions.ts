import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import * as AllCoinsActionCreators from "../store/reducers/Coins/CoinsActions/CoinsAction";
import * as PortfolioActionsCreators from "../store/reducers/Portfolio/PortfolioActions/PortfolioActions"

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(AllCoinsActionCreators, dispatch);
}

export const usePortfolioActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(PortfolioActionsCreators, dispatch);
}