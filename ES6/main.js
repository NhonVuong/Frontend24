// propHoTen = 'hoTen';
// propLop = 'lop';

// let hocVien = {
//     [propHoTen]: 'Nguyen Van A',
//     [propLop]: 'FrontEnd24',
//     layThongTinHocVien: function() {
//         // return () => {
//         console.log(`Ho ten: ${this.hoTen} - Lop: ${this.lop}`);
//         // }
//     }
// }

// hocVien.layThongTinHocVien();

// hocVien.layThongTinHocVien();

// let hocVienB = {...hocVien, truong: 'abc' }
// hocVienB.hoTen = "Tran Van B";
// console.log("Hoc vien A:", hocVien);
// console.log("Hoc vien B:", hocVienB);

// let mangA = [1, 2, 3, 4];
// let mangB = [...mangA, 5, ...mangA];
// // mangB.push(5);
// console.log(mangA);
// console.log(mangB);

// // es6
// let { hoTen, lop: tai, layThongTinHocVien } = hocVien;
// console.log(hoTen);
// console.log(tai);

// let [hoTen_, lop_] = ['nguyen van a', 'FE24'];
// console.log(hoTen_, lop_);

// // let hocVien_ES6 = {
// //     hoTen,
// //     lop,
// //     layThongTinHocVien: () => {
// //         return 'Ho ten: ' + this.hoTen + 'Lop: ' + this.lop;
// //     }
// // }

//duyet mang thuong dung cho for of
let mangSV = {
    sv1: { maSV: 1, hoTen: 'nguyen van a' },
    sv2: { maSV: 2, hoTen: 'nguyen van b' }
}
for (let key in mangSV) {
    console.log(key, mangSV[key]); //lay ra tung sinh vien

}


import SinhVien from './sinhVien.js';
import { LopHoc } from './lopHoc.js';

let sv = new SinhVien(1, 'nguyen van a');
let lop = new LopHoc(1, 'FE24');
console.log(sv);
console.log(lop);