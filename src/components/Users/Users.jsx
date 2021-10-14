import React from 'react';
import axios from 'axios';
import s from './Users.module.css';
import itemPhoto from '../../assets/images/avatar.png'
import classNames from 'classnames';

class Users extends React.Component{

    axiosFunc = (activePage) =>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    componentDidMount(){
        this.axiosFunc(this.props.activePage);
    }

    render(){
        console.log(this.props.activePage);
        return(
            <div className={s.users}>
                {Array(6).fill(0).map((i,x) => <span key={x} 
                                                    onClick={() => {this.props.setActivePage(x+1)
                                                                    this.axiosFunc(x+1)}}
                                                    className={classNames({
                                                    [s.numberPage]: true,
                                                    [s.activePage]: x+1 === this.props.activePage,
                                                    })}>{x+1} </span>)}
                {this.props.users.map(u => 
                    <div key={u.id} className={s.user}>
                        <img src={u.photos.small===null?itemPhoto:u.photos.small}
                             alt="photo"
                             width="100" />
                        <div>Имя: {u.name}</div>
                        <button onClick={() => this.props.follow(u.id)}>{u.subscribed?"Отписаться":"Подписаться"}</button>
                    </div>)}
            </div>
        )
    };
}

export default Users;