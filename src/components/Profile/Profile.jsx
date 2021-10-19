import React from 'react';
import Preloader from '../Preloader/Preloader';
import MyProfile from './MyProfile/MyProfile';
import Post from './Posts/Post';
import s from './Profile.module.css';

const Profile = (props) => {
    let allPostMessages = props.mes
        .map((m,i) => <Post key={i} message={m.message} count={m.count}/>);
    
    if(!props.profile) return(<Preloader />);

    return (
        <div>
            <img className={s.nature}
                 src='https://img1.akspic.ru/originals/5/3/6/2/0/102635-pejzazhi_gor-dikaya_mestnost-gora-gornyj_relef-nebo-1920x1080.jpg'/>
            <div className={s.contant}>
                <img className={s.cat} 
                     src={!props.profile.photos.small?
                        'https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1.jpg':
                        props.profile.photos.small}
                />
                <p>Имя: {props.profile.fullName}</p>
                <p>Обо мне: {props.profile.aboutMe}</p>
                <p>Работа: {props.profile.lookingForAJob?'Есть':'Нет'}: {props.profile.lookingForAJobDescription}</p>
                     
                <MyProfile dispatch={props.dispatch}
                           profileTextareaValue={props.profileTextareaValue}
                />
                { allPostMessages }
            </div>
        </div>
    )
}

export default Profile;