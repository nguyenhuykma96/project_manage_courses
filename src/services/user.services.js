import Axios from 'axios';
export default class UserService {
    getAllUsers(){
        return  Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
            method : 'GET'
        })
    }
    addUser(data){
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
            method : 'POST',
            data
        })
    }
    deleteUser(taiKhoan){
        return  Axios({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            method : "DELETE", 
          });
    }
    updateUser(user){
        return Axios({
            url : 'http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung',
            method : 'PUT',
            data : user
        });
    }
    
    
}