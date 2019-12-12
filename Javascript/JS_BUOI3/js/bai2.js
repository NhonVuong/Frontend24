function getEle(element) {
    return document.getElementById(element);
}

var mangSV = [];

function XacNhan() {
    var maSV = getEle('maSV').value;
    var tenSV = getEle('tenSV').value;
    var loaiSV = getEle('loaiSV').value;
    var diemToan = parseFloat(getEle('txtDiemToan').value);
    var diemLy = parseFloat(getEle('txtDiemLy').value);
    var diemHoa = parseFloat(getEle('txtDiemHoa').value);
    var diemRL = getEle('txtDiemRenLuyen').value;

    var sinhvien = {
        maSV: maSV,
        tenSV: tenSV,
        loaiSV: loaiSV,
        diemToan: diemToan,
        diemLy: diemLy,
        diemHoa: diemHoa,
        diemRL: diemRL,
        tinhDTB: function() {
            return (this.diemToan + this.diemLy + this.diemHoa) / 3;
        }
    }

    mangSV.push(sinhvien);
    HienThi();
}

function HienThi() {
    var tbody = getEle('tbodySinhVien');
    tbody.innerHTML = '';
    //duyet mang de lay  tung SV
    for (var i = 0; i < mangSV.length; i++) {
        var sinhVien = mangSV[i];

        //tao hang
        var trowSV = document.createElement('tr');

        var tdMaSV = document.createElement('td');
        tdMaSV.innerHTML = sinhVien.maSV;
        trowSV.appendChild(tdMaSV);

        var tdTenSV = document.createElement('td');
        tdTenSV.innerHTML = sinhVien.tenSV;
        trowSV.appendChild(tdTenSV);

        var tdLoaiSV = document.createElement('td');
        tdLoaiSV.innerHTML = sinhVien.loaiSV;
        trowSV.appendChild(tdLoaiSV);

        var tdDiemTB = document.createElement('td');
        tdDiemTB.innerHTML = sinhVien.tinhDTB();
        trowSV.appendChild(tdDiemTB);

        var tdDiemRL = document.createElement('td');
        tdDiemRL.innerHTML = sinhVien.diemRL;
        trowSV.appendChild(tdDiemRL);

        tbody.appendChild(trowSV);
    }

}