import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import { Header, NavBar, Profile, News, Music, Settings, Dialog, UsersContainer } from './components';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='site'>
                <Header/>
                <NavBar/>
                <div className='content'>
                    <Route path='/Dialog'
                           render={() => <Dialog userInfo={props.state.dialogPage.allMessages}
                                                 dialogTextareaValue={props.state.dialogPage.dialogTextareaValue}
                                                 dispatch={props.dispatch}
                           />}
                    />
                    <Route path='/Profile' render={() =>
                        <Profile mes={props.state.profilePage.postMessages}
                                 profileTextareaValue={props.state.profilePage.profileTextareaValue}
                                 dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/Users' component={UsersContainer}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;