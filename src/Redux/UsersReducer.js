const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {id:1, subscribed:false, name:"Kostya", country:"Belarus", city:"Slutsk", mes:"Hi, I'm Kostya!"},
        {id:2, subscribed:true, name:"Dima", country:"Russia", city:"Moscow", mes:"Hi, I'm Dima!"},
        {id:3, subscribed:false, name:"Lesha", country:"Ukraine", city:"Kiev", mes:"Hi, I'm Lesha!"},
    ]
}

const UsersReducer = (state=initialState, action) =>{
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) return {...u, subscribed:true}
                    return u;
                })
            };
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.id) return {...u, subscribed:false}
                return u;
            })
        };
        default: return state;
    }
}

export const followAC = (id) => ({type:'FOLLOW', id:id});
export const unfollowAC = (id) => ({type:'UNFOLLOW', id:id});

export default UsersReducer;