const CHANGE_BACKGROUND_IMAGE = 'CHANGE_BACKGROUND_IMAGE';

let settingsInit = {
    url: 'https://i.pinimg.com/originals/83/bc/9e/83bc9e38f376ce6f8c0e2e97c01cfa05.jpg',
};

const settingsReducer = (state = settingsInit, action) =>{
    switch (action.type) {
        case CHANGE_BACKGROUND_IMAGE:
            state.url = action.url;
            return state;
        default: return state;
    }
}

export const ChangeBackgroundImage = (url) => ({type: CHANGE_BACKGROUND_IMAGE, url: url});

export default settingsReducer;