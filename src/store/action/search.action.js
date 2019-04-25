import * as Types from '../constants/ActionTypes';

export  const actSearchUser = (keyword) => {
    return {
        type : Types.SEARCH_ALL,
        keyword
    }
}
// export  const actSearchPosition = (position) => {
//     return {
//         type : Types.SEARCH_POSITION,
//         position
//     }
// }