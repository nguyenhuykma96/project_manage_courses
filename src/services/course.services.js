import Axios from 'axios';
export default class CourseService {
    getCourses(){
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method : 'GET',       
        })
    }
    deleteCourse(id){
        return Axios({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`,
            method : 'DELETE'
        })
    }
    addCourse = (data) => {
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc',
            method : 'POST',
            data
        })
    }
    updateCourse = data => {
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatKhoaHoc',
            method : 'PUT',
            data
        })
    }
    registerCourse = (id, account) => {
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/GhiDanhKhoaHoc',
            method : 'POST',
            data : {
                MaKhoaHoc : id,
                TaiKhoan :account
            }
        })
    }
    getRegistedCourse = (account) => {
        return Axios({
            url :`http://svcy.myclass.vn/api/QuanLyTrungTam/LayThongTinKhoaHoc?taikhoan=${account}`,
            method : 'GET'
        })
    }

}