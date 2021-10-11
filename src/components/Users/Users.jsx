import s from './Users.module.css';

function Users(props){
    return(
        <div className={s.users}>
            {props.users.map(u => 
                <div key={u.id} className={s.user}>
                    <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/279-pai1579-nam.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5fb3265ca4ba96ce298932c01383a713" 
                         alt="photo"
                         width="100" />
                    <div>Имя: {u.name}</div>
                    <div>Страна: {u.country}</div>
                    <div>Город: {u.city}</div>
                    <div>Статус: {u.mes}</div>
                    {u.subscribed?
                    <button onClick={() => props.unfollow(u.id)}>Отписаться</button>:
                    <button onClick={() => props.follow(u.id)}>Подписаться</button>}
                </div>)}
        </div>
    )
}

export default Users;