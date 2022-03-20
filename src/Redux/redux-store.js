import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import UsersReducer from "./UsersReducer";
import SettingsReducer from "./SettingsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: UsersReducer,
    settingsPage: SettingsReducer,
});

let store = createStore(reducers);

export default store;