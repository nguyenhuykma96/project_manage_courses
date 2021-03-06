import { combineReducers } from "redux";
import registerUserReducer from './registerUser';
import loginUserReducer from './login';
import profileReducer from './profile';
import editProfileReducer from './edit-profile';
import coursesReducer from "./courses";
import userReducer from './user';
import userEditing from './userEditing';
import statusReducer from './editStatus';
import filterUserReducer from "./filterUser";
import searchReducer from './search.js';
import courseEditing from './courseEditing';
import filterCourseReducer from "./filterCourse";
import coursesRegistedReducer from "./coursesRegisted";
import coursesUserRegistedReducer from "./courseUserRegisted";

const appReducer = combineReducers({
    registerUser: registerUserReducer,
    loginUser: loginUserReducer,
    getProfileUser: profileReducer,
    editProfile: editProfileReducer,
    coursesList: coursesReducer,
    user: userReducer,
    status: statusReducer,
    userEditing,
    filterUser: filterUserReducer,
    search: searchReducer,
    courseEditing,
    filterCourse : filterCourseReducer,
    coursesRegisted : coursesRegistedReducer,
    coursesUserRegisted : coursesUserRegistedReducer

});
export default appReducer;