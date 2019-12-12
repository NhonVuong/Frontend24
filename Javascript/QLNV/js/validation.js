function Validation() {
    this.KiemTraRong = function(value, inputId, message) {
        if (value == "") {
            getEle(inputId).innerHTML = message;
            return false;
        } else {
            getEle(inputId).innerHTML = "";
            return true;
        }
    }

    //Kiem tra ma nhan vien
    this.KiemTraTrungMaNV = function(mangNV, value, inputId, message) {
        for (var i = 0; i < mangNV.length; i++) {
            if (mangNV[i].MaNV === value) {
                getEle(inputId).innerHTML = message;
                return false;
            }
        }
        getEle(inputId).innerHTML = "";
        return true;
    }

    // Kiem tra do dai phan tu
    this.KiemTraDoDai = function(value, inputId, message, min, max) {
        if (value.length < min || value.length > max) {
            getEle(inputId).innerHTML = message;
            return false;
        }
        getEle(inputId).innerHTML = "";
        return true;
    }

    //Kiem tra định dạng cho chữ
    this.KiemTraDinhDang = function(value, inputId, message) {
        var pattern = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if (!pattern.test(value)) {
            getEle(inputId).innerHTML = message;
            return false;
        }
        getEle(inputId).innerHTML = "";
        return true;
    }

    //Kiem tra chuc vu
    this.KiemTraChucVu = function(ele, inputId, message) {
        if (getEle(ele).selectedIndex === 0) {
            getEle(inputId).innerHTML = message;
            return false;
        }
        getEle(inputId).innerHTML = "";
        return true;
    }
}