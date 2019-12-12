// var lop = `fe24`;
// var title = `cybersoft ${lop}`;
// console.log(title);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let x = 20;
// {
//     let x = 10;
//     console.log("x2 = "+ x);
// }
// console.log("x1 = "+ x);
// const hocSinh = {
//     maHS: 1,
//     tenHS: "nguyn van a"
// }
// hocSinh.maHS = 2;
// hocSinh.tenHS = "nguyen van b";
var mangButton = document.getElementsByTagName("button");
var _loop_1 = function (i) {
    button = mangButton[i]; //lay ra 1 button tu mangButton
    button.onclick = function () {
        alert(i);
    };
};
var button;
for (var i = 0; i < mangButton.length; i++) {
    _loop_1(i);
}
var so = 5;
var flag = true;
var mangSoNguyen = [1, 2, 3, 4, 5];
var arrString = ["fe1", "fe2", "fe3"];
var HocSinh = /** @class */ (function () {
    function HocSinh(ma, ten) {
        this.maHS = ma;
        this.tenHS = ten;
    }
    return HocSinh;
}());
var mangHS = [
    { maHS: 1, tenHS: "nguyen van a" },
    { maHS: 2, tenHS: "nguyen van b" },
    new HocSinh(3, "nguyen van c")
];
//tuple: kieu mang hon hop
//du lieu cua doi tuong the hien duoi dang mang
var hs = [1, "nguyen van a"];
//du lieu 1 ang the hien duoi dang doi tuong
var mangHocSinh = {
    hs1: { maHS: 1, tenHS: "abc" },
    hs2: { maHS: 2, tenHS: "bcd" }
};
//kieu du lieu liet ke hang so
var apiQLSP;
(function (apiQLSP) {
    apiQLSP["them"] = "http://api.cybersoft.vn/api/themsanpham";
    apiQLSP["xoa"] = "http://api.cybersoft.vn/api/xoasanpham";
    apiQLSP["sua"] = "http://api.cybersoft.vn/api/suasanpham";
})(apiQLSP || (apiQLSP = {}));
console.log(apiQLSP.them);
var num = "asd";
num = 5;
//function ES5
function TinhTongES5(a, b) {
    return a + b;
}
var TinhTongES5_2 = function (a, b) {
    return a + b;
};
//function ES6
var TinhTongES6 = function (a, b) { return a + b; };
//mot so phuong thuc ho tro es6
var mangSP = [
    { maSP: 1, tenSP: "Iphone X", gia: 30000000, hangSX: "Apple" },
    { maSP: 2, tenSP: "Sony XA", gia: 7000000, hangSX: "Sony" },
    { maSP: 3, tenSP: "Iphone 8", gia: 14000000, hangSX: "Apple" },
    { maSP: 4, tenSP: "Iphone XS", gia: 27000000, hangSX: "Apple" },
    { maSP: 5, tenSP: "Iphone XS Max", gia: 34000000, hangSX: "Apple" },
    { maSP: 6, tenSP: "Samsung S10", gia: 19000000, hangSX: "Samsung" },
    { maSP: 7, tenSP: "Huawei pro 10", gia: 9000000, hangSX: "Huawei" },
    { maSP: 8, tenSP: "Sony XZ Premium", gia: 10000000, hangSX: "Sony" }
];
//for in lay ra vi tri cua mang
for (var i in mangSP) {
    console.log("vi tri: ", i);
    console.log("gia tri: ", mangSP[i]);
}
//for of lay ra doi tuong cua mang
for (var _i = 0, mangSP_1 = mangSP; _i < mangSP_1.length; _i++) {
    var sp = mangSP_1[_i];
    console.log("gia tri doi tuong: ", sp);
}
//for in dung de duyet mang duoi dang doi tuong
//for of dung de duyet du lieu duoi dang mang
//lay ra cac sp cos gia <= 20000000
var mangKQ = [];
for (var i = 0; i < mangSP.length; i++) {
    var sp = mangSP[i];
    if (sp.gia <= 20000000) {
        mangKQ.push(sp);
    }
}
console.log(mangKQ);
//ES6
var MangKQES6 = mangSP.filter(function (sp) { return sp.hangSX == "Sony"; });
console.log(MangKQES6);
function tinhTong() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    switch (params.length) {
        case 3: {
            //...
        }
        case 2: {
            //...
        }
    }
}
//spread operator: toan tu...
var SinhVienA = { maSV: 1, tenSV: "a" };
var SinhVienB = __assign({}, SinhVienA);
SinhVienB.tenSV = "c";
console.log("SVA: " + SinhVienA.tenSV);
console.log("SVB: " + SinhVienB.tenSV);
var mangA = [1, 2, 3, 4, 5];
var mangB = mangA;
mangB.push(6);
console.log("Mang A:", mangA);
console.log("Mang B:", mangB);
//-----------------------
var sinhVienA = {
    maSV: 1,
    tenSV: "a",
    thongTinSV: {
        diaChi: "vbnm",
        sdt: "1234567890"
    }
};
var maSV = sinhVienA.maSV, tenSV = sinhVienA.tenSV;
var sdt = sinhVienA.thongTinSV.sdt;
//khai bao lop doi tuong voiws ES5
function hocSinh(maHS, tenHS) {
    this.maHS = maHS;
    this.tenHS = tenHS;
    this.xuatThongTin = function () {
        console.log('ma hs:' + this.maHS + 'ten hs: ' + this.tenHS);
    };
}
//khoi tao doi tuong
var HS = new hocSinh(1, 'nguyn van a');
//khai bao lop doi tuong voi ES6
var HSinh = /** @class */ (function () {
    function HSinh(maHS, tenHS) {
        this.maHS = maHS;
        this.tenHS = tenHS;
    }
    HSinh.prototype.xuatThongTin = function () {
        console.log('ma hs:' + this.maHS + 'ten hs: ' + this.tenHS);
    };
    return HSinh;
}());
var Hsinh = new HSinh(1, 'nguyen van a');
console.log(HSinh);
//# sourceMappingURL=main.js.map