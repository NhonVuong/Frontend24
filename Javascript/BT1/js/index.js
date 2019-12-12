function getEle(element) {
    return document.getElementById(element);
}

function ThongTinSV() {
    var MaSV = getEle('txtMaSV').value;
    getEle('spanMaSV').innerHTML = MaSV;
    var TenSV = getEle('txtTenSV').value;
    getEle('spanTenSV').innerHTML = TenSV;
    var loaiSV = getEle('loaiSV').value;
    getEle('spanLoaiSV').innerHTML = loaiSV;
    var DiemToan = getEle('txtDiemToan').value;
    var DiemVan = getEle('txtDiemVan').value;
    var DiemToan = parseFloat(DiemToan);
    var DiemVan = parseFloat(DiemVan);
    var DiemTB = (DiemToan + DiemVan) / 2;
    getEle('spanDTB').innerHTML = DiemTB;
    if (DiemTB < 5) {
        getEle('spanXepLoai').innerHTML = 'Yeu';
    } else if (DiemTB >= 5 && DiemTB < 6.5) {
        getEle('spanXepLoai').innerHTML = 'Trung Binh';
    } else if (DiemTB >= 6.5 && DiemTB <= 7.9) {
        getEle('spanXepLoai').innerHTML = 'Kha';
    } else {
        getEle('spanXepLoai').innerHTML = 'Gioi';
    }
}