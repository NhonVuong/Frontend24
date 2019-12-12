function DanhSachNguoiDungService() {
    //lay danh sach nguoi dung tu server thong qua API
    this.layDanhSachNguoiDung = function() {
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET",
        })

    }

    //Them nguoi dung
    this.themNguoiDung = function(dataNguoiDung) {
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: dataNguoiDung,
            // dataType: "JSON",
        })
    }

    //Xoa nguoi dung
    this.xoaNguoiDung = function(id) {
        return $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
            type: "DELETE",
        })
    }

    //Cap nhat nguoi dung
    this.capNhatNguoiDung = function() {
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
            type: "PUT",
        })
    }
}