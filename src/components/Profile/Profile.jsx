import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Post from './Posts/Post';
import s from './Profile.module.css';
import {addPost, changeTextareaProfile} from "../../Redux/State";

const Profile = (props) => {
    let allPostMessages = props.mes
        .map(m => <Post message={m.message} count={m.count}/>);

    return (
        <div>
            <img className={s.nature}
                 src='https://img1.akspic.ru/originals/5/3/6/2/0/102635-pejzazhi_gor-dikaya_mestnost-gora-gornyj_relef-nebo-1920x1080.jpg'/>
            <div className={s.contant}>
                <img className={s.cat} src='https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1.jpg'/>
                <MyProfile dispatch={props.dispatch}
                           profileTextareaValue={props.profileTextareaValue}
                />
                { allPostMessages }
            </div>
        </div>
    )
}

export default Profile;