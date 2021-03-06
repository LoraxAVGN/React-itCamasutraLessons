import React  from 'react';
import s from './Dialog.module.css';
import {NavLink, Route} from "react-router-dom";
import {addMesActionCreator, changeTextareaDialogActionCreator} from "../../Redux/DialogReducer";

const  DialogLink = (props) =>{  // создание Navlink для имён пользователей
    return(
        <div className={s.dialogName}>
            <NavLink to={'/Dialog/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Dialog = (props) =>{
    let allDialogLinks = props.userInfo.map( i => <DialogLink name={i.name} id={i.id}/> );  // создание компонент

    let allUserMessages = (id) => {     // создание массива тэгов с сообщениями пользователя

        let textareaMes = React.createRef();  // текст textarea

        let clickMesButton = () => {                // обработка нажатия
            let text = textareaMes.current.value;
            props.dispatch(addMesActionCreator(text, id));
        }

        return (
            <div className={s.userDialog}>
                {props.userInfo[id - 1].usersMes.map(i =>
                    <div>{i.mes}</div>)}
                <textarea className={s.textarea}
                        //   maxLength="70"
                          ref={textareaMes}
                          value={props.dialogTextareaValue}
                          onChange={() => props.dispatch(changeTextareaDialogActionCreator(textareaMes.current.value))}
                />
                <div/>
                <button className={s.button} onClick={ clickMesButton }>Отправить</button>
            </div>
        )
    };

    let routeMes = props.userInfo.map(i =>      // вывод сообщений при соответствии аддресса
        <Route render={() => allUserMessages(i.id)} path={'/Dialog/'+i.id} />);

    return(
        <div className={s.dialog}>
            <div className={s.dialogs}>
                { allDialogLinks }
            </div>
            <div>
                { routeMes }
            </div>
        </div>
    )
}

export default Dialog;