import Axios from 'axios';
export default class CourseService {
    getCourses(){
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method : 'GET',
        
        })
    }
}