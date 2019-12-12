// var a = '10';
// var b = 16;
// var parse = parseInt(a);
// console.log(parse);
// console.log(a + b);
// console.log(parse + b);

function TinhTong2So() {
    //lay gia tri so 1 va so 2

    var so1 = document.getElementById('so1').value;
    // console.log(so1);
    // console.log(typeof(so1));
    so1 = parseInt(so1);
    // console.log(typeof(so1));
    var so2 = document.getElementById('so2').value;
    so2 = parseInt(so2);
    var ketqua = so1 + so2;
    // console.log('Tong hai so: ' + ketqua);
    document.getElementById('KetQua').innerHTML += 'Tong hai so: ' + ketqua + '<br>';
}

document.getElementById('tru2So').onclick = function TinhHieu2So() {
    //lay gia tri so 1 va so 2

    var so1 = document.getElementById('so1').value;
    // console.log(so1);
    // console.log(typeof(so1));
    so1 = parseInt(so1);
    // console.log(typeof(so1));
    var so2 = document.getElementById('so2').value;
    so2 = parseInt(so2);
    var ketqua = so1 - so2;
    // console.log('Hieu hai so: ' + ketqua);
    document.getElementById('KetQua').innerHTML += 'Hieu hai so: ' + ketqua + '<br>';
}