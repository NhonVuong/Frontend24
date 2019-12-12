// var lop = `fe24`;
// var title = `cybersoft ${lop}`;
// console.log(title);

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
for (let i = 0; i < mangButton.length; i++) {
  var button = mangButton[i]; //lay ra 1 button tu mangButton
  button.onclick = function() {
    alert(i);
  };
}

let so: number = 5;

let flag: boolean = true;

let mangSoNguyen: number[] = [1, 2, 3, 4, 5];

let arrString: string[] = ["fe1", "fe2", "fe3"];

class HocSinh {
  maHS: number;
  tenHS: string;
  constructor(ma: number, ten: string) {
    this.maHS = ma;
    this.tenHS = ten;
  }
}
let mangHS: HocSinh[] = [
  { maHS: 1, tenHS: "nguyen van a" },
  { maHS: 2, tenHS: "nguyen van b" },
  new HocSinh(3, "nguyen van c")
];

//tuple: kieu mang hon hop
//du lieu cua doi tuong the hien duoi dang mang

let hs: [number, string] = [1, "nguyen van a"];

//du lieu 1 mang the hien duoi dang doi tuong
let mangHocSinh = {
  hs1: { maHS: 1, tenHS: "abc" },
  hs2: { maHS: 2, tenHS: "bcd" }
};

//kieu du lieu liet ke hang so
enum apiQLSP {
  them = "http://api.cybersoft.vn/api/themsanpham",
  xoa = "http://api.cybersoft.vn/api/xoasanpham",
  sua = "http://api.cybersoft.vn/api/suasanpham"
}
console.log(apiQLSP.them);

let num: any = "asd";
num = 5;

//function ES5
function TinhTongES5(a, b) {
  return a + b;
}
let TinhTongES5_2 = function(a, b) {
  return a + b;
};

//function ES6
let TinhTongES6 = (a, b) => a + b;

//mot so phuong thuc ho tro es6
let mangSP = [
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
for(let i in mangSP){
  console.log("vi tri: ",i);
  console.log("gia tri: ",mangSP[i]);
}
//for of lay ra doi tuong cua mang
for(let sp of mangSP){
  console.log("gia tri doi tuong: ",sp);
}
//for in dung de duyet mang duoi dang doi tuong
//for of dung de duyet du lieu duoi dang mang



//lay ra cac sp cos gia <= 20000000
let mangKQ = [];
for (let i = 0; i < mangSP.length; i++) {
  let sp = mangSP[i];
  if (sp.gia <= 20000000) {
    mangKQ.push(sp);
  }
}
console.log(mangKQ);

//ES6
let MangKQES6: any[] = mangSP.filter(sp => sp.hangSX == "Sony");
console.log(MangKQES6);

function tinhTong(...params) {
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
let SinhVienA = { maSV: 1, tenSV: "a" };
let SinhVienB = { ...SinhVienA };
SinhVienB.tenSV = "c";
console.log("SVA: " + SinhVienA.tenSV);
console.log("SVB: " + SinhVienB.tenSV);

let mangA = [1, 2, 3, 4, 5];
let mangB = mangA;
mangB.push(6);
console.log("Mang A:", mangA);
console.log("Mang B:", mangB);



//-----------------------
let sinhVienA = {
  maSV: 1,
  tenSV: "a",
  thongTinSV: {
    diaChi: "vbnm",
    sdt: "1234567890"
  }
};
let { maSV, tenSV } = sinhVienA;
let { sdt } = sinhVienA.thongTinSV;



//khai bao lop doi tuong voiws ES5
function hocSinh(maHS, tenHS){
  this.maHS = maHS;
  this.tenHS = tenHS;
  this.xuatThongTin = function(){
  console.log('ma hs:' + this.maHS + 'ten hs: '+ this.tenHS);
  }
}
//khoi tao doi tuong
let HS = new hocSinh(1,'nguyn van a');

//khai bao lop doi tuong voi ES6
class HSinh{
  private maHS:number;
  tenHS:string;
  layMaHS():number{
    return this.maHS;
  }
  constructor(maHS, tenHS){
    this.maHS = maHS;
    this.tenHS = tenHS;
  }
  xuatThongTin():void{
    console.log('ma hs:' + this.maHS + 'ten hs: '+ this.tenHS);
  }
}
let Hsinh = new HSinh(1, 'nguyen van a');
Hsinh.layMaHS();
console.log(HSinh);
