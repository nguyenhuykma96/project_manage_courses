import * as Types from '../constants/ActionTypes';

export  const actFilterUser = (filter) => {
    return {
        type : Types.FILTER_USER,
        filter
    }
}
// export  const actSearchPosition = (position) => {
//     return {
//         type : Types.SEARCH_POSITION,
//         position
//     }
// }