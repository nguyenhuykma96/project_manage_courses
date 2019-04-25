import * as Types from './../constants/ActionTypes';

let initialState = '';
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_ALL:
            state = action.keyword
            return state;
        default: return state;
    }
}
export default searchReducer;