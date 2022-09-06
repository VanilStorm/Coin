import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import * as testActionCreators from "../store/reducers/testAction/testAction"

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(testActionCreators, dispatch);
}