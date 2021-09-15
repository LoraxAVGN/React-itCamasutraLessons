import {combineReducers, createStore} from "redux";
import profileReduser from "./ProfileReduser";
import dialogReduser from "./DialogReduser";

let reducers = combineReducers(
    profileReduser,
    dialogReduser,
);

let store = createStore();

export default store;