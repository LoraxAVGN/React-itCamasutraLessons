import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
});

let store = createStore(reducers);

export default store;