function getEle(element) {
    return document.getElementById(element);
}

function HienThiThongTin() {
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var loaiSV = getEle('loaiSV').value;
    var diemToan = getEle('txtDiemToan').value;
    diemToan = parseFloat(diemToan);
    var diemVan = getEle('txtDiemVan').value;
    diemVan = parseFloat(diemVan);

    var sinhVien = {
        maSV: maSV,
        tenSV: tenSV,
        loaiSV: loaiSV,
        diemToan: diemToan,
        diemVan: diemVan,
        tinhDiemTB: function() {
            return (this.diemToan + this.diemVan) / 2;
        },
        xepLoai: function() {
            var dtb = this.tinhDiemTB();
            var xepLoai = '';
            if (dtb > 5) {
                xepLoai = 'Gioi';
            } else {
                xepLoai = "Yeu";
            }
            return xepLoai;
        }
    }

    getEle('spanMaSV').innerHTML = sinhVien.maSV;
    getEle('spanTenSV').innerHTML = sinhVien.tenSV;
    getEle('spanLoaiSV').innerHTML = sinhVien.loaiSV;
    getEle('spanDTB').innerHTML = sinhVien.tinhDiemTB();
    getEle('spanXepLoai').innerHTML = sinhVien.xepLoai();
}