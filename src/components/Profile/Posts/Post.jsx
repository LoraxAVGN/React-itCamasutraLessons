import React  from 'react';
import s from './Post.module.css';

const Post= (props) =>{
  return(
      <div className={s.item}>
        <img src="http://cdn.onlinewebfonts.com/svg/download_415638.png" alt="" />
        <span className={s.message}> {props.message} </span>
        <span className={s.likes}>{props.count}</span>
        <button>like</button>
      </div>
    )
}

export default Post;