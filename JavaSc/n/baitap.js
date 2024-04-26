let checkTK = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM".split("");
let checkPass = "zxcvbnmasdfghjklqwertyuiop1234567890ZXCVBNMASDFGHJKLQWERTYUIOP!@#$%^&*".split("");
let arrSo = "1234567890".split("");
let arrChu = "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP".split("");
let arrKyTu = "!@#$%^&*".split("");

function validateTT() {
    let tenSinhVien = document.getElementById("tenSinhVien").value;
    let tenTaiKhoan = document.getElementById("tenTaiKhoan").value;
    let passWord = document.getElementById("passWord").value;
    let passWordXN = document.getElementById("passWordXN").value;
    let tuoiSinhVien = document.getElementById("tuoiSinhVien").value;
    let emailSinhVien = document.getElementById("emailSinhVien").value;
    let gioiTinh = document.getElementsByName("gioiTinh");
    let monHoc = document.getElementsByName("monHoc");
    let queQuan = document.getElementById("queQuan");

    console.log("--------------------------------------------------");
   
    validateTen(tenSinhVien);

    validateTK(tenTaiKhoan);

    validatePass(passWord);

    validateMKXN(passWord,passWordXN);

    validateTuoi(tuoiSinhVien);

    validateEmail(emailSinhVien);

    validateGT(gioiTinh);

    validateMonHoc(monHoc);

    validateQQ(queQuan);

}

function validateTen(tenSinhVien){
    tenSinhVien = tenSinhVien.trim();
    if (tenSinhVien === "") {
        document.getElementById("loiBatBuoc").style.display = "block";
    } else {
        console.log("Tên sinh viên : ", tenSinhVien);
        document.getElementById("loiBatBuoc").style.display = "none";
    }
}

function validateTK(tenTaiKhoan) {
    tenTaiKhoan = tenTaiKhoan.trim();
    
    document.getElementById("loiBatBuocTK").style.display = "none";
    document.getElementById("loiTen").style.display = "none";

    if (tenTaiKhoan === "") {
        document.getElementById("loiBatBuocTK").style.display = "block";
    } 
    else {
        let taiKhoan = tenTaiKhoan.split("");
        let check = 0;
        for (let item of taiKhoan) {
            if (checkTK.indexOf(item) == -1) {
                document.getElementById("loiTen").style.display = "block";
                check = 1;
                break;
            }
        }
        if (check == 0) {
            console.log("Tên tài khoản : ", tenTaiKhoan);
        }
    }
}

function validatePass(passWord) {
    passWord = passWord.trim();
    
    document.getElementById("loiPass").style.display = "none";
    document.getElementById("loiPassKT").style.display = "none";
    document.getElementById("PassManh").style.display = "none";
    document.getElementById("PassOk").style.display = "none";
    document.getElementById("PassYeu").style.display = "none";

    if (passWord.length < 8) {
        document.getElementById("loiPass").style.display = "block";
    } else {
        let check = 0;
        let passArr = passWord.split("");
        for (let item of passArr) {
            if (checkPass.indexOf(item) == -1) {
                document.getElementById("loiPassKT").style.display = "block";
                check = 1;
                break;
            }
        }
        if (check == 0) {
            let checkChu = [];
            let checkSo = [];
            let checkKyTu = [];

            for (let item of passArr) {
                if (arrSo.indexOf(item) != -1) {
                    checkSo.push(item);
                }
                if (arrChu.indexOf(item) != -1) {
                    checkChu.push(item);
                }
                if (arrKyTu.indexOf(item) != -1) {
                    checkKyTu.push(item);
                }
            }

            if (checkChu.length > 0 && checkKyTu.length > 0 && checkSo.length > 0) {
                document.getElementById("PassManh").style.display = "block";
            } else if (checkChu.length > 0 && checkSo.length > 0) {
                document.getElementById("PassOk").style.display = "block";
            } else {
                document.getElementById("PassYeu").style.display = "block";
            }
        }
    }
}

function validateMKXN(passWord,passWordXN){
    if(passWord != passWordXN || passWordXN === ""){
        document.getElementById("loiPassXn").style.display = "block";
    }else{
        console.log("Mật khẩu : ",passWord);
        document.getElementById("loiPassXn").style.display = "none";
    }
}

function validateTuoi(tuoiSinhVien){
    tuoiSinhVien = tuoiSinhVien.trim();

    document.getElementById("loiBatBuocTuoi").style.display = "none";
    document.getElementById("loiSo").style.display = "none";
    document.getElementById("loiTuoi").style.display = "none";

    if(tuoiSinhVien === ""){
        document.getElementById("loiBatBuocTuoi").style.display = "block";
    }else{
        if(Number(isNaN(tuoiSinhVien))){
            document.getElementById("loiSo").style.display = "block";
        }
        else if(Number(tuoiSinhVien) > 99 || Number(tuoiSinhVien) < 1){
            document.getElementById("loiTuoi").style.display = "block";
        }
        else{
            console.log("Tuổi : ",tuoiSinhVien);
        }
    }
}

function validateEmail(emailSinhVien){
    emailSinhVien = emailSinhVien.trim();

    let checkEmail = ["@gmail.com","@fpt.edu.vn"];
    document.getElementById("loiBatBuocEmail").style.display = "none";
    document.getElementById("loiEmail").style.display = "none";
    let dauEmail = emailSinhVien.substring(0,emailSinhVien.lastIndexOf("@")).split("");

    if(dauEmail.length < 5){
        document.getElementById("loiBatBuocEmail").style.display = "block";
    }else{
        let check = 0;
        let tim = 0;
        let duoiEmail = emailSinhVien.substring(emailSinhVien.lastIndexOf("@"),emailSinhVien.length);

        for (let item of dauEmail) {
            if(checkTK.indexOf(item) == -1){
                document.getElementById("loiBatBuocEmail").style.display = "block";
                tim = 1;
                break;
            }
        }
        
        for (let item of checkEmail) {
            if(item == duoiEmail && tim == 0){
                console.log("Email : ",emailSinhVien);  
                check = 1; 
                break;
            }
        }
        if(check == 0 && tim == 0){
            document.getElementById("loiEmail").style.display = "block";

        }
    } 
}

function validateGT(gioiTinh){
    for (let item of gioiTinh) {
        if(item.checked == true){
            console.log("Giới tính : ", item.value);
            document.getElementById("loiBatBuocGT").style.display = "none";
            break;
        }else{
            document.getElementById("loiBatBuocGT").style.display = "block";
        }
    }
}

function validateMonHoc(monHoc){
    let dsachMon = [];
    for (let item of monHoc) {
        if(item.checked == true){
            dsachMon.push(item.value);
        }else{
            document.getElementById("loiBatBuocMH").style.display = "block";
        }
    }
    if(dsachMon.length != 0){
        console.log("Môn học : ",dsachMon.join(", "));
        document.getElementById("loiBatBuocMH").style.display = "none";
    } 
}

function validateQQ(queQuan){
    let queSV = queQuan.value;
    document.getElementById("loiBatBuocQQ").style.display = "none";

    if(queSV === 'Hà Nội'){
        console.log("Quê quán : ", queSV);
    }else if(queSV === 'Hà Tĩnh'){
        console.log("Quê quán : ", queSV);
    }else if(queSV === 'Đà Nẵng'){
        console.log("Quê quán : ", queSV);
    }else if(queSV === 'Khác'){
        console.log("Quê quán : ", queSV);
    }else{
        document.getElementById("loiBatBuocQQ").style.display = "block";
    }
}

