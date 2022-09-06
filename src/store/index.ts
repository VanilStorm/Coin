import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/root";

export const store = createStore(rootReducer, applyMiddleware(thunk))