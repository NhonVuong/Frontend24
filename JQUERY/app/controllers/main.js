$(document).ready(function() {

    var quanLyNguoiDung = new QuanLyNguoiDung();
    var danhSachNguoiDungService = new DanhSachNguoiDungService();



    var resultAjax = danhSachNguoiDungService.layDanhSachNguoiDung();
    resultAjax
        .done(function(result) {
            quanLyNguoiDung.mangNguoiDung = result;
            HienThi();
            localStorage.setItem('DSND', JSON.stringify(result));
        })
        .fail(function(err) {
            console.log(err);
        })



    //show Modal
    function ShowModal(title, buttonLabel, idBtn) {
        var modalTitle = $('#modal-title');
        modalTitle.html(title);

        var contentFooter = `
            <button class="btn btn-success" id="btn${idBtn}">${buttonLabel}</button>
            <button type="button" id="btnDongND" class="btn btn-danger" data-dismiss="modal">Close</button>
        `
        var modalFooter = $('#modal-footer');
        modalFooter.html(contentFooter);

    }
    $('#btnThemNguoiDung').click(function() {
        ShowModal('Thêm người dùng', 'Thêm', "ThemND");
    });

    //them nguoi dung
    $('body').delegate("#btnThemND", "click", function() {
        //lay thong tin
        var taiKhoan = $('#TaiKhoan').val();
        var hoTen = $('#HoTen').val();
        var matKhau = $('#MatKhau').val();
        var email = $('#Email').val();
        var soDT = $('#SoDienThoai').val();
        var maLoaiNguoiDung = $('#maloaiND').val();


        //tao doi tuong nguoi dung
        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
        // console.log(nguoiDung);
        var ajax = danhSachNguoiDungService.themNguoiDung(nguoiDung);
        ajax
            .done(function(result) {
                if (result == "tai khoan da ton tai !") {
                    alert("tai khoan, ho ten da ton tai");
                } else {
                    location.reload();
                }
            })
            .fail(function(err) {
                console.log(err);

            })

        //Hiển thị sweetalert
        // swal("OK", "THÊM THÀNH CÔNG", "success");
        // $('#btnDongND').trigger('click');
        $('.txtForm').val("");

        // HienThi();
    })

    function HienThi() {
        var content = "";
        quanLyNguoiDung.mangNguoiDung.map(function(nguoiDung, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${nguoiDung.TaiKhoan}</td>
                    <td>${nguoiDung.MatKhau}</td>
                    <td>${nguoiDung.HoTen}</td>
                    <td>${nguoiDung.Email}</td>
                    <td>${nguoiDung.SoDT}</td>
                    <td>${nguoiDung.TenLoaiNguoiDung}</td>
                    <td>
                        <button class="btn btn-info btnSuaNguoiDung"
                         data-taikhoan="${nguoiDung.TaiKhoan}"
                         data-hoten="${nguoiDung.HoTen}"
                         data-matkhau="${nguoiDung.MatKhau}"
                         data-email="${nguoiDung.Email}"
                         data-sdt="${nguoiDung.SoDT}"
                         data-tenloaiND="${nguoiDung.TenLoaiNguoiDung}">Sửa</button>
                        <button class="btn btn-danger btnXoaNguoiDung" data-id="${nguoiDung.TaiKhoan}">Xoá</button>
                    </td>
                </tr>
            `
        })

        $('#tblDanhSachNguoiDung').html(content);
    }

    $('body').delegate(".btnXoaNguoiDung", "click", function() {
        // var id = $(this).data("id");
        var id = $(this).attr('data-id');
        var ajax = danhSachNguoiDungService.xoaNguoiDung(id);
        ajax
            .done(function(result) {
                location.reload();
            })
            .fail(function(err) {
                console.log(err);

            })
    })

    $('body').delegate(".btnSuaNguoiDung", "click", function() {
        var taiKhoan = $(this).attr('data-taikhoan');
        var hoTen = $(this).attr('data-hoten');
        var matKhau = $(this).attr('data-matkhau');
        var email = $(this).attr('data-email');
        var sdt = $(this).attr('data-sdt');
        var tenLoaiND = $(this).attr('data-tenloaiND')

        $('#TaiKhoan').val() = taiKhoan;
        $('#HoTen').val() = hoTen;
        $('#MatKhau').val() = matKhau;
        $('#Email').val() = email;
        $('#SoDienThoai').val() = sdt;
        $('#maloaiND').val() = tenLoaiND;

        // var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);

        // var ajax = danhSachNguoiDungService.capNhatNguoiDung(JSON.stringify("DSND", ));
    })

})