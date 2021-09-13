import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/State';

export let renderAllTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={state.addPost}
                 changeTextareaProfile={state.changeTextareaProfile}
                 changeTextareaDialog={state.changeTextareaDialog}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAllTree();

reportWebVitals();