import axios from 'axios';
import s from './Users.module.css';
import itemPhoto from '../../assets/images/avatar.png'

function Users(props){

    if (props.users.length===0){    // Для того чтобы убрать зацикленность
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }

    return(
        <div className={s.users}>
            {props.users.map(u => 
                <div key={u.id} className={s.user}>
                    <img src={u.photos.small===null?itemPhoto:u.photos.small}
                         alt="photo"
                         width="100" />
                    <div>Имя: {u.name}</div>
                    {/* <div>Страна: {u.country}</div>
                    <div>Город: {u.city}</div>
                    <div>Статус: {u.mes}</div> */}
                    <button onClick={() => props.follow(u.id)}>{u.subscribed?"Отписаться":"Подписаться"}</button>
                </div>)}
        </div>
    )
}

export default Users;