 import * as Types from '../constants/ActionTypes';

let initialState = {
    account : '',
    position : -1 
};
const filterUserReducer  = (state = initialState, action) => {
    switch(action.type){
        case Types.FILTER_USER :
            return {
                account : action.filter.account.toLowerCase(),
                position : parseInt(action.filter.position)
            };
        
        default : return state;
    }
}
export default filterUserReducer;