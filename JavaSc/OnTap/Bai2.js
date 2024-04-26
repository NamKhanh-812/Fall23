//
function validate() {

    let ten = document.getElementById("ten").value;
    let email = document.getElementById("email").value;
    let matKhau = document.getElementById("matKhau").value;

    nhapten(ten);
    nhapEmail(email);
    nhapMK(matKhau);
}

function nhapten(ten) {
    if (ten === "") {
        document.getElementById("bb1").style.display = "block";
        return false;
    }
    else {
        document.getElementById("bb1").style.display = "none";
        console.log("Tên:", ten);
    }
}

function nhapEmail(email) {
    email = email.trim();
    if (email === "") {
        document.getElementById("bb2").style.display = "block";
        return false;
    }
    else if (email.lastIndexOf(".") === email.length - 1 || email.indexOf("@") <= 0 || email.indexOf("@") - email.indexOf(".") >= -1) {
        document.getElementById("bb2").style.display = "none";
        document.getElementById("dinhDangEmail").style.display = "block";
        return false;

    }
    else {
        console.log("Email:", email);
        document.getElementById("bb2").style.display = "none";
        document.getElementById("dinhDangEmail").style.display = "none";
    }
}
function nhapMK(mk) {
    let arrAll = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLZXCVBNMQWERTYUIOP@!#$%&*1234567890".split("");
    let arrThuong = "asdfghjklqwertyuiopzxcvbnm".split("");
    let arrHoa = "ASDFGHJKLZXCVBNMQWERTYUIOP".split("");
    let kiTu = "@!#$%&*".split("");
    let so = "1234567890".split("");
    mk = mk.split("");
    if (mk === "") {
        document.getElementById("bb3").style.display = "block";
        return;
    }
    else if (mk.length < 8) {
        document.getElementById("bb3").style.display = "none";
        document.getElementById("nho8").style.display = "block";
        return;

    }
    else if (mk.indexOf(arrAll) < 0) {
        document.getElementById("nho8").style.display = "none";

        document.getElementById("dinhDangMK").style.display = "block";
        return;
    }
    else {
        document.getElementById("bb3").style.display = "none";
        document.getElementById("dinhDangMK").style.display = "none";
        document.getElementById("nho8").style.display = "none";

        console.log("Mật khẩu:", mk);
    }

}



