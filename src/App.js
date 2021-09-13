import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialog from "./components/Dialog/Dialog";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='site'>
                <Header/>
                <NavBar/>
                <div className='content'>
                    <Route path='/Dialog'
                           render={() => <Dialog userInfo={props.state.allMessages}
                                                 dialogTextareaValue={props.state.dialogPage.dialogTextareaValue}
                                                 dispatch={props.dispatch}
                           />}
                    />
                    <Route path='/Profile' render={() =>
                        <Profile mes={props.state.dialogPage.postMessages}
                                 textareaValue={props.state.profilePage.textareaValue}
                                 dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;