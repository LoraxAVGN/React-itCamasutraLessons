import React  from 'react';
import {addPostActionCreator, changeTextareaProfileActionCreator} from "../../../Redux/ProfileReducer";
import s from './MyProfile.module.css';

let textareaRef = React.createRef();

const MyProfile = (props) =>{

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let textareaChange = () =>{
        props.dispatch(changeTextareaProfileActionCreator(textareaRef.current.value));
    }

    return(
      <div >
        <p className={s.addCom}>Добавить комментарий</p>
        <textarea maxLength="120" ref={textareaRef} onChange={textareaChange} value={props.profileTextareaValue}/>
          <div/>
        <button className={s.addBut} onClick={ addPost }>Отправить</button>
      </div>
      )
}

export default MyProfile;