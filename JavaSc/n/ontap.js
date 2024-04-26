function validateOT() {
    // lấy node
    let hoTen = document.getElementById("hoTen").value;
    let namSinh = document.getElementById("namSinh").value;
    let soDT = document.getElementById("soDT").value;
    let nodegioiTinh = document.getElementsByName("gioiTinh");

    console.log("\nTHÔNG TIN CÁ NHÂN\n");

    // validate họ tên
    hoTen = hoTen.trim();

    if (hoTen === "") {
        document.getElementById("loiTen").style.display = "block";
    } else {
        console.log("Họ tên : " + hoTen);
        document.getElementById("loiTen").style.display = "none";
    }

    // gọi hàm validate năm sinh
    validateNamSinh(namSinh);

    // gọi hàm validate sdt
    validateSDT(soDT);


    // validate giới tính
    for (let gt of nodegioiTinh) {
        if (gt.checked == true) {
            console.log("Giới tính : " + gt.value);
            document.getElementById("loiGT").style.display = "none";
            break;
        } else {
            document.getElementById("loiGT").style.display = "block";
        }
    }
}

function validateNamSinh(namSinh) {
    namSinh = namSinh.trim();
    document.getElementById("loiNam").style.display = "none";
    document.getElementById("loiSoNam").style.display = "none";
    document.getElementById("loiSoNamSai").style.display = "none";

    if (namSinh === "") {
        document.getElementById("loiNam").style.display = "block";
        return false;
    } else if (isNaN(namSinh)) {
        document.getElementById("loiSoNam").style.display = "block";
        return false;
    } else if (Number(namSinh) > 2023) {
        document.getElementById("loiSoNamSai").style.display = "block";
        return false;
    } else {
        console.log("Năm sinh : " + namSinh);
        return true;
    }
}

function validateSDT(soDT) {

    soDT = soDT.trim();
    document.getElementById("loiSdt").style.display = "none";
    document.getElementById("loiSdt10KT").style.display = "none";
    document.getElementById("loiSdtSo").style.display = "none";

    if (soDT === "") {
        document.getElementById("loiSdt").style.display = "block";
        return false;
    } else if (isNaN(soDT)) {
        document.getElementById("loiSdtSo").style.display = "block";
        return false;
    } else if (soDT.length !== 10) {
        document.getElementById("loiSdt10KT").style.display = "block";
        return false;
    } else {
        console.log("Số điện thoại : " + soDT);
        return true;
    }

}

function validateDN() {
    let nodeTenDN = document.getElementById("tenDangNhap").value;
    let nodeMatKhau = document.getElementById("matKhau").value;

    validateTenDN(nodeTenDN);

    validateMK(nodeMatKhau);
}

function validateTenDN(nodeTenDN) {
    mangTen = nodeTenDN.trim().split("");

    let checkChuSo = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N",
        "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "u", "U", "x", "X", "y", "Y", "z", "Z", "w", "W", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    document.getElementById("loiDN").style.display = "none";
    document.getElementById("loiDNKyTu").style.display = "none";

    if (nodeTenDN === "") {
        document.getElementById("loiDN").style.display = "block";
        return false;
    }

    let check = 0;
    for (let item of mangTen) {
        if (checkChuSo.indexOf(item) == -1) {
            document.getElementById("loiDNKyTu").style.display = "block";
            check = 1;
            return false;
        }
    }
    if (check == 0) {
        console.log("Tên đăng nhập : " + nodeTenDN);
        return true;
    }
}

function validateMK(nodeMatKhau) {

    let kyTu = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N",
        "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "u", "U", "x", "X", "y", "Y", "z", "Z", "w", "W", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "!", "@", "#", "$", "%", "^", "&", "*"];

    nodeMatKhau = nodeMatKhau.trim();

    let matKhauNhap = nodeMatKhau.split("");

    document.getElementById("loiMK8").style.display = "none";
    document.getElementById("loiMKKyTu").style.display = "none";
    document.getElementById("loiMKmanh").style.display = "none";
    document.getElementById("loiMKbth").style.display = "none";
    document.getElementById("loiMKyeu").style.display = "none";

    if (matKhauNhap.length < 8) {
        document.getElementById("loiMK8").style.display = "block";
        return false;
    }

    for (let item of matKhauNhap) {
        if (kyTu.indexOf(item) == -1) {
            document.getElementById("loiMKKyTu").style.display = "block";
            return false;
        }
    }

    let checkChu = [];
    let checkSo = [];
    let checkKyTu = [];

    for (let item of matKhauNhap) {
        let dsachChu = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N",
            "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "u", "U", "x", "X", "y", "Y", "z", "Z", "w", "W"]
        let dsachSo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let dsachKTDB = ["!", "@", "#", "$", "%", "^", "&", "*"]

        if (dsachChu.indexOf(item) != -1) {
            checkChu.push(item);
        }
        if (dsachSo.indexOf(item) != -1) {
            checkSo.push(item);
        }
        if (dsachKTDB.indexOf(item) != -1) {
            checkKyTu.push(item);
        }
    }

    if (checkChu.length != 0 && checkKyTu.length != 0 && checkSo.length != 0) {
        document.getElementById("loiMKmanh").style.display = "block";
        return false;
    } else if (checkChu.length != 0 && checkSo.length != 0) {
        document.getElementById("loiMKbth").style.display = "block";
        return false;
    } else {
        document.getElementById("loiMKyeu").style.display = "block";
        return true;
    }

}





