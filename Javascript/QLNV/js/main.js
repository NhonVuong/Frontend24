function getEle(element) {
    return document.getElementById(element);
}

var mangNV = [];
getEle('btnCapNhatThongTin').style.display = 'none';
var validator = new Validation();

function ThemNV() {
    var hoNV = getEle('ho').value;
    var tenNV = getEle('ten').value;
    var MaNV = getEle('msnv').value;
    var ngayLam = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    var isValid = true;
    isValid &= validator.KiemTraRong(hoNV, 'tb-ho', "(*) Vui lòng nhập họ") &&
        validator.KiemTraDinhDang(hoNV, 'tb-ho', "(*) Vui lòng nhập chữ");

    isValid &= validator.KiemTraRong(tenNV, 'tb-ten', "(*) Vui lòng nhập tên") &&
        validator.KiemTraDinhDang(tenNV, 'tb-ten', "(*) Vui lòng nhập chữ");

    isValid &= validator.KiemTraRong(MaNV, 'tb-msnv', "(*) Vui lòng nhập mã nhân viên") &&
        validator.KiemTraTrungMaNV(mangNV, MaNV, 'tb-msnv', "(*) Mã NV bị trùng") &&
        validator.KiemTraDoDai(MaNV, 'tb-msnv', "(*) Vui lòng nhập mã có khoảng từ 2-12 kí tự", 2, 12);

    isValid &= validator.KiemTraChucVu('chucvu', 'tb-chucvu', "(*) Vui lòng chọn chức vụ")

    if (isValid) {
        //tao doi tuong thong qua lop doi tuong
        var nhanVien = new NhanVien(hoNV, tenNV, MaNV, ngayLam, chucVu);
        nhanVien.TinhLuong();
        mangNV.push(nhanVien);
        HienThi(mangNV);
        getEle('msnv').removeAttribute('readonly'); //readonly: không sửa được
        getEle('btnThemNhanVien').style.display = 'block';
        getEle('btnCapNhatThongTin').style.display = 'none';
        resetForm();
        HienThi(mangNV);

    }

}

//Ham hien thi thong tin nhan vien
function HienThi(mangDauVao) {
    var content = "";
    for (var i = 0; i < mangDauVao.length; i++) {
        var nhanVien = mangDauVao[i];
        //template string
        content += `
        <tr>
            <td>${nhanVien.MaNV}</td>
            <td>${nhanVien.hoNV} ${nhanVien.tenNV}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.LuongTong}</td>
            <td>
                <button class="btn btn-secondary"
                        data-id="${nhanVien.MaNV}"
                        data-ho="${nhanVien.hoNV}"
                        data-ten="${nhanVien.tenNV}"
                        data-chucVu="${nhanVien.chucVu}"
                        data-ngayDiLam="${nhanVien.ngayLam}"
                        onclick="LoadThongTinLenForm(event)">
                        Sửa
                </button>
                <button class="btn btn-danger" 
                        data-id="${nhanVien.MaNV}" 
                        onclick="XoaNhanVien(event)">
                        Xoá
                </button>
            </td>
        </tr>
        `
    }
    getEle('tbodyNhanVien').innerHTML = content;
}

/* 
    local storage
    luu du lieu o dang chuoi (JSON)
    chi luu duoc thuoc tinh khong luu dc phuong thuc (ham)
*/
//luu du lieu vao local storage
function LuuDuLieuVaoLocalStorage() {
    //Chuyen kieu du lieu tu mang nhan vien vao chuoi JSON
    var data = JSON.stringify(mangNV);

    //Luu vao local storage
    localStorage.setItem('DanhSachNhanVien', data);
}

//Lay du lieu tu local storage
function LayDuLieuVaoLocalStorage() {
    //Kiem tra xem co du lieu trong local storage khong
    var data = localStorage.getItem("DanhSachNhanVien");
    if (!data) {
        mangNV = [];
    } else {
        //chuyen kieu du lieu tu JSON thanh mang
        mangNV = JSON.parse(data);
    }
    HienThi(mangNV);
}

function XoaNhanVien(event) {
    //lay id cua nut xoa
    var btnXoa = event.target;
    var idCanXoa = btnXoa.getAttribute('data-id');
    var index = TimViTri(idCanXoa);
    mangNV.splice(index, 1);
    HienThi(mangNV);
}

//tim vi tri
function TimViTri(id) {
    for (var i = 0; i < mangNV.length; i++) {
        var nhanVien = mangNV[i];
        if (id === nhanVien.MaNV) {
            return i;
        }
    }
    return -1;
}

function LoadThongTinLenForm(event) {
    var btnSua = event.target;
    var maNV = btnSua.getAttribute('data-id');
    var hoNV = btnSua.getAttribute('data-ho');
    var tenNV = btnSua.getAttribute('data-ten');
    var chucVuNV = btnSua.getAttribute('data-chucVu');
    var ngayDiLam = btnSua.getAttribute('data-ngayDiLam');

    //bo thong tin vao form
    getEle('ho').value = hoNV;
    getEle('ten').value = tenNV;
    getEle('msnv').value = maNV;
    getEle('datepicker').value = ngayDiLam;
    getEle('chucvu').value = chucVuNV;

    getEle('msnv').setAttribute('readonly', true); //readonly: không sửa được
    getEle('btnThemNhanVien').style.display = 'none';
    getEle('btnCapNhatThongTin').style.display = 'block';
}

function resetForm() {
    getEle('ho').value = '';
    getEle('ten').value = '';
    getEle('msnv').value = '';
    getEle('chucvu').selectedIndex = 0;
}

function LayThongTin() {
    var hoNV = getEle('ho').value;
    var tenNV = getEle('ten').value;
    var MaNV = getEle('msnv').value;
    var ngayLam = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    var nhanVienMoi = new NhanVien(hoNV, tenNV, MaNV, ngayLam, chucVu);
    //TIm NV cu thong qua id
    var index = TimViTri(MaNV);
    if (index != -1) {
        mangNV[index] = nhanVienMoi;
    }
    nhanVienMoi.TinhLuong();
    getEle('msnv').removeAttribute('readonly'); //readonly: không sửa được
    getEle('btnThemNhanVien').style.display = 'block';
    getEle('btnCapNhatThongTin').style.display = 'none';
    resetForm();
    HienThi(mangNV);

}



function TimThongTinNhanVien() {
    //lay keyword can tim
    var keyword = getEle('txtKeyword').value;
    //xu ly chuoi
    keyword = keyword.toLowerCase().trim();

    // C1
    // var index = TimViTri(keyword);
    // if (index !== -1) {
    //     var mangTimKiem1 = [];
    //     var nhanVien = mangNV[index];
    //     mangTimKiem1.push(nhanVien);
    //     HienThi(mangTimKiem1);
    // }

    // C2
    var mangTimKiem = mangNV.filter(function(nhanVien) {
        return nhanVien.tenNV.toLowerCase().trim().indexOf(keyword) !== -1;
    })
    HienThi(mangTimKiem);

}

var btnThemNV = getEle('btnThemNhanVien');
btnThemNV.addEventListener('click', ThemNV)

var btnLuuDuLieu = getEle('btnLuuDuLieu');
btnLuuDuLieu.addEventListener('click', LuuDuLieuVaoLocalStorage);

var btnLayDuLieu = getEle('btnLayDuLieu');
btnLayDuLieu.addEventListener('click', LayDuLieuVaoLocalStorage);

var btnLayThongTin = getEle('btnCapNhatThongTin');
btnLayThongTin.addEventListener('click', LayThongTin);

var btnTimThongTin = getEle('btnTimThongTin');
btnTimThongTin.addEventListener('click', TimThongTinNhanVien);