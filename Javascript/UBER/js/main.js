//Uber X
const UberX_1 = 8000;
const UberX_2 = 12000;
const UberX_3 = 10000;
const tgCho_UberX = 2000;

//Uber SUV
const UberSUV_1 = 9000;
const UberSUV_2 = 14000;
const UberSUV_3 = 12000;
const tgCho_UberSUV = 3000;

//Uber Black
const UberBlack_1 = 10000;
const UberBlack_2 = 16000;
const UberBlack_3 = 14000;
const tgCho_UberBlack = 4000;

//Ham get
function getEle(element) {
    return document.getElementById(element);
}
//B1: lay loai xe
function LayloaiXe() {
    var uberX = getEle('uberX');
    var uberSUV = getEle('uberSUV');
    var uberBlack = getEle('uberBlack');
    var loaiXeChon = '';
    if (uberX.checked) {
        loaiXeChon = uberX.value;
        // console.log(loaiXeChon);
    } else if (uberSUV.checked) {
        loaiXeChon = uberSUV.value;
        // console.log(loaiXeChon);
    } else {
        loaiXeChon = uberBlack.value;
        // console.log(loaiXeChon);
    }
    return loaiXeChon;
}

//Ham tinh tong tien
function TinhTien() {
    //Lay loai xe
    var loaiXe = LayloaiXe();
    console.log(loaiXe);
    //Lay thoi gian cho
    var tgCho = getEle('tgCho').value;
    //lay so km
    var soKM = getEle('soKm').value;
    var tongHoaDon = 0;
    //Tinh theo loai xe
    switch (loaiXe) {
        case 'uberX':
            tongHoaDon = TinhTheoLoaiXe(soKM, tgCho, UberX_1, UberX_2, UberX_3, tgCho_UberX);
            break;
        case 'uberSUV':
            tongHoaDon = TinhTheoLoaiXe(soKM, tgCho, UberSUV_1, UberSUV_2, UberSUV_3, tgCho_UberSUV);
            break;
        case 'uberBlack':
            tongHoaDon = TinhTheoLoaiXe(soKM, tgCho, UberBlack_1, UberBlack_2, UberBlack_3, tgCho_UberBlack);
            break;
        default:
            break;
    }
}

//Ham tinh theo loai xe
function TinhTheoLoaiXe(sokm, tgcho, giaLoai1, giaLoai2, giaLoai3, tgChoTheoLoai) {
    var tien = 0;
    if (sokm <= 1) {
        tien = sokm * giaLoai1 + tgcho * tgChoTheoLoai;
        // console.log(tien);
    } else if (sokm > 1 && sokm < 21) {
        tien = giaLoai1 + (sokm - 1) * giaLoai2 + tgcho * tgChoTheoLoai;
        // console.log(tien);
    } else if (sokm >= 21) {
        tien = giaLoai1 + 19 * giaLoai2 + (sokm - 20) * giaLoai3 + tgcho * tgChoTheoLoai;
        // console.log(tien);
    }
    return document.getElementById('xuatTien').innerHTML = tien + ' vnđ';
}