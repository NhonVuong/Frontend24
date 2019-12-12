//Tao lop doi tuong
function NhanVien(hoNV, tenNV, MaNV, ngayLam, chucVu) {
    this.hoNV = hoNV;
    this.tenNV = tenNV;
    this.MaNV = MaNV;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.LuongCoBan = 400;
    this.LuongTong = 0;
    this.TinhLuong = function() {
        if (this.chucVu === 'Sếp') {
            this.LuongTong = this.LuongCoBan * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            this.LuongTong = this.LuongCoBan * 1.5;
        } else if (this.chucVu === 'Nhân viên') {
            this.LuongTong = this.LuongCoBan;
        }
    }
}