import React  from 'react';
import s from './Settings.module.css';
import IkonBG from './IkonBG/ikonBG';

let arrBG = ['https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700336287.jpg', 'https://www.desktopbackground.org/download/1280x800/2015/09/25/1016414_web-design-background-images-all-wallpapers-new_1920x1200_h.jpg', 'https://i.pinimg.com/originals/4c/78/5a/4c785a77ee995f9d73ef31f49140cb8a.jpg', 'https://tcoyd.org/wp-content/uploads/2018/01/home-background-image.jpg', 'https://i.pinimg.com/originals/83/bc/9e/83bc9e38f376ce6f8c0e2e97c01cfa05.jpg', 'https://i.ytimg.com/vi/YQ5YvR_Ixyg/maxresdefault.jpg', 'https://i.pinimg.com/originals/73/f2/4d/73f24dfa6d537e487b0e9110be275165.jpg', 'https://i.pinimg.com/originals/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg'];

const Settings = (props) =>{
    return(
        <div className={s.settings}>
            Выберите фон главного окна:
            <div className={s.blockBG}>
                {arrBG.map((i,x) => <IkonBG key={x} BG={i} dispatch={props.dispatch}></IkonBG>)}
            </div>
        </div>
    )
}

export default Settings;