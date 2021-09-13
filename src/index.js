import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/State';

export let renderAllTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.state}
                 addPost={store.addPost.bind(store)}
                 changeTextareaProfile={store.changeTextareaProfile.bind(store)}
                 changeTextareaDialog={store.changeTextareaDialog.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAllTree();

reportWebVitals();