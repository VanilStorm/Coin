import {Dispatch} from "react";

export const testNumStr = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({type: 'Test'})
    }
}