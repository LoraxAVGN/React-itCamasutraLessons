import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Header, NavBar, ProfileContainer, News, Settings, Dialog, UsersContainer } from './components';

const App = (props) => {

    // var backImg = {
    //     backgroundImage: `url(${props.state.settingsPage.url})`
    // }

    return (
        <BrowserRouter>
            <div className='site'>
                <Header />
                <div className='main-container'>
                    <NavBar />
                    {/* <div className='content' style={backImg}> */}
                    <div className='content'>
                        <Route path='/Dialog'
                            render={() => <Dialog userInfo={props.state.dialogPage.allMessages}
                                dialogTextareaValue={props.state.dialogPage.dialogTextareaValue}
                                dispatch={props.dispatch}
                            />}
                        />
                        <Route path='/Profile/:idUser?' render={() =>
                            <ProfileContainer mes={props.state.profilePage.postMessages}
                                profileTextareaValue={props.state.profilePage.profileTextareaValue}
                                dispatch={props.dispatch}
                            />}
                        />
                        <Route path='/Users' component={UsersContainer} />
                        <Route path='/News' component={News} />
                        <Route path='/Settings' render={() =>
                            <Settings dispatch={props.dispatch}
                            />}
                        />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;