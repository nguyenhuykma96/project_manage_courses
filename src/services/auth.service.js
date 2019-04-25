import Axios from 'axios';

export default class AuthService {
    registerUser(data){
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy',
            method : 'POST',
            data
        })
    };
    loginUser(user){
        return Axios({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`,
            method : 'GET'
        })
    }
};
export class Profile {
    getProfile(taiKhoan){
        return Axios({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${taiKhoan}`,
            method : 'GET'
        });
    };
    updateProfile(user){
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung',
            method : 'PUT',
            data : user
        });
    }
}