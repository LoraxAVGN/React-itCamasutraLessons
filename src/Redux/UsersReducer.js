const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';


let initialState = {
    users: [],
    usersCount: 0,
    pagesCount: 0,
    activePage: 1,
}

const UsersReducer = (state=initialState, action) =>{
    switch(action.type){
        case FOLLOW_UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) return {...u, subscribed:!u.subscribed}
                    return u;
                })
            };
            case SET_USERS:
                return{
                    ...state,
                    users: action.users,
                }
            case SET_USERS_COUNT:
                return{
                    ...state,
                    usersCount: action.usersCount,
                    pagesCount: Math.ceil(action.usersCount/10),
                }
            case SET_ACTIVE_PAGE:
                return{
                    ...state,
                    activePage: action.activePage,
                }
        default: return state;
    }
}

export const followAC = (id) => ({type: FOLLOW_UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setUsersCountAC = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export const setActivePageAC = (activePage) => ({type: SET_ACTIVE_PAGE, activePage});

export default UsersReducer;