function getEle(element) {
    return document.getElementById(element);
}

//Tạo biến trỏ tới bảng danh sách
var tbl = getEle('tbodySinhVien');
var dsDiem = [];

function LayDuLieu() {
    //Cach 1: dung rows & cells

    // var tblRows = tbl.rows;
    // for (var i = 0; i < tblRows.lenght; i++) {
    //     dsDiem.push(tblRows[i].cells[3].innerHTML * 1)
    // }
    // console.log(dsDiem);

    //Cach 2: Lay thong qua class name
    var tblDiem = document.getElementsByClassName('td-diem');
    for (var i = 0; i < tblDiem.length; i++) {
        dsDiem.push(tblDiem[i].innerHTML * 1);
    }
    console.log(dsDiem);
}
//lấy dữ liệu chỉ 1 lần
LayDuLieu();

//Tìm sv có điểm cao nhất
function TimSinhVienGioiNhat() {
    var vtri = 0;
    var max = dsDiem[0];
    for (var i = 0; i < dsDiem.length; i++) {
        if (dsDiem[i] > max) {
            max = dsDiem[i];
            vtri = i;
        }
    }
    var tenSVGioiNhat = tbl.rows[vtri].cells[2].innerHTML;
    // console.log(tenSVGioiNhat);
    // console.log(max);
    getEle('svGioiNhat').innerHTML = tenSVGioiNhat + ': ' + max;
}

function TimSinhVienYeuNhat() {
    var vtri = 0;
    var min = dsDiem[0];
    for (var i = 0; i < dsDiem.length; i++) {
        if (dsDiem[i] < min) {
            min = dsDiem[i];
            vtri = i;
        }
    }
    var tenSVYeuNhat = tbl.rows[vtri].cells[2].innerHTML;
    // console.log(tenSVYeuNhat);
    // console.log(min);
    getEle('svYeuNhat').innerHTML = tenSVYeuNhat + ': ' + min;
}

function TimDanhSachSinhVienYeu() {
    var kq = '';
    for (var i = 0; i < dsDiem.length; i++) {
        if (dsDiem[i] < 5) {
            var ten = tbl.rows[i].cells[2].innerHTML;
            kq += '<br>' + ten + ': ' + dsDiem[i];
        }
    }
    getEle('soSVYeu').innerHTML = kq;
}

function TimDSSVGioi() {
    var kq = '';
    for (var i = 0; i < dsDiem.length; i++) {
        if (dsDiem[i] > 8) {
            var ten = tbl.rows[i].cells[2].innerHTML;
            kq += '<br>' + ten + ': ' + dsDiem[i];
        }
    }
    getEle('soSVGioi').innerHTML = kq;
}

// function SapXepDiemTangDan() {
//     // var vtri = 0;
//     for (var i = 0; i < dsDiem.length - 1; i++) {
//         for (var j = i + 1; dsDiem.length; j++) {
//             if (dsDiem[i] > dsDiem[j]) {
//                 var temp = dsDiem[i];
//                 dsDiem[i] = dsDiem[j];
//                 dsDiem[j] = temp;
//             }
//         }
//     }
// }

function TangDan(a, b) {
    return a - b;
}

function SapXepDiemTangDan() {
    dsDiem.sort(TangDan);
    console.log(dsDiem);
}

function GiamDan(a, b) {
    return a - b;
}

function SapXepDiemGiamDan() {
    dsDiem.sort(GiamDan);
    console.log(dsDiem);
}