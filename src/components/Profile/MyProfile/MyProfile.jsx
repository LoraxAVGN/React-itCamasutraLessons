import React  from 'react';
import {addPostActionCreator, changeTextareaProfileActionCreator} from "../../../Redux/ProfileReducer";

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
        <textarea ref={textareaRef} onChange={textareaChange} value={props.profileTextareaValue}/>
          <div/>
        <button onClick={ addPost }>Отправить</button>
      </div>
      )
}

export default MyProfile;