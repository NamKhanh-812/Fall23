function validateDK() {

    // Tài khoản
    let nodeTaiKhoanId = document.getElementById("taiKhoan");
    let taiKhoanValue = nodeTaiKhoanId.value;
    if(taiKhoanValue===""){
        document.getElementById("thongBaoLoiTK").style.display="block";
    }
    else{
        console.log("Tên tài khoản:",taiKhoanValue);
        document.getElementById("thongBaoLoiTK").style.display="none";

    }


    return false;
}