import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import * as AllCoinsActionCreators from "../store/reducers/AllCoinsActions/AllCoinsAction"

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(AllCoinsActionCreators, dispatch);
}