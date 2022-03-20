import React  from 'react';
import s from './ikonBG.module.css'
import {ChangeBackgroundImage} from "../../../Redux/SettingsReducer";

const IkonBG = (props) =>{

    var backImg = { backgroundImage: `url(${props.BG})`};
    let funBG = () =>{ props.dispatch(ChangeBackgroundImage(props.BG)); };

    return(
        <div className={s.imgBG} onClick={funBG} style={ backImg }></div>
      )
}

export default IkonBG;