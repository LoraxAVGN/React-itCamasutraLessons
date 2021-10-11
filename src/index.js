import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from "react-redux";

export let renderAllTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderAllTree(store.getState());

store.subscribe(() => {
    renderAllTree(store.getState());
});

reportWebVitals();