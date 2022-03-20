import React from 'react';
import s from './Users.module.css';
import itemPhoto from '../../assets/images/avatar.png'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const Users = (props) => {
    return(
        <div className={s.users}>
            {props.isFetch &&
            <Preloader />
            }

            {!props.isFetch && <> 
                <div className={s.pagination}>
                    {Array(25).fill(0).map((i,x) => <span key={x}     // Array(20) - задаёт кол-во страниц
                                                        onClick={() => {props.setActivePage(x+1)
                                                                        props.axiosFunc(x+1)}}
                                                        className={classNames({
                                                        [s.numberPage]: true,
                                                        [s.activePage]: x+1 === props.activePage,
                                                        })}>{x+1} </span>)}
                </div>

                
                
                <div className={s.pageUsers}>
                    {props.users.map(u => 
                        <div key={u.id} className={s.user}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small===null?itemPhoto:u.photos.small}
                                        alt="photo"
                                        width="100"
                                        height="100" />
                            </NavLink>
                            <div>{u.name.length<10?u.name:u.name.slice(0, 9)+"..."}</div>
                            <button onClick={() => props.follow(u.id)}>{u.subscribed?"Отписаться":"Подписаться"}</button>
                        </div>)}
                </div>
            </>}
        </div>
    )
}

export default Users;