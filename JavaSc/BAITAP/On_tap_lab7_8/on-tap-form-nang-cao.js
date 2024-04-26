function validate(){
    console.log("// Start");
    let hoVaTenValue = document.getElementById("ho-va-ten").value;
    let namSinhValue = document.getElementById("nam-sinh").value;
    let sdtValue = document.getElementById("so-dien-thoai").value;
    let nodeGioiTinh = document.getElementsByName("gioiTinh");

    // validate năm sinh
    valideNamSinh(namSinhValue);

    // validate số điện thoại
    valideSDT(sdtValue);
}

// hàm nhận vào giá trị năm sinh và trả về true, false
// true khi input hợp lệ
// false khi input không hợp lệ
function valideNamSinh(namSinhValue){
    // Ẩn hết thông báo lỗi
    document.getElementById("loi-ns-bat-buoc").style.display = "none";
    document.getElementById("loi-ns-number").style.display = "none";
    document.getElementById("loi-ns-tuong-lai").style.display = "none";

    // Trim() dữ liệu năm sinh;
    namSinhValue = namSinhValue.trim();

    if(namSinhValue === ""){
        // kiểm tra bắt buộc
        // TODO: Hiển thị lỗi
        document.getElementById("loi-ns-bat-buoc").style.display = "block";
        return false;
    }else if (isNaN(namSinhValue)){
        // Kiểm tra có phải là số không
        // TODO: hiển thị lỗi
        document.getElementById("loi-ns-number").style.display = "block";
        return false;
    }else if(Number(namSinhValue) > 2023){
        // Kiểm tra với 2023
        // TODO:
        document.getElementById("loi-ns-tuong-lai").style.display = "block";
        return false;
    }else{
        // Năm sinh hợp lệ
        // Ẩn hết thông báo
        document.getElementById("loi-ns-bat-buoc").style.display = "none";
        document.getElementById("loi-ns-bat-buoc").style.display = "none";
        document.getElementById("loi-ns-tuong-lai").style.display = "none";
        return true;
    }
}

function valideSDT(soDienThoai){
    // Ẩn hết thông báo lỗi
    document.getElementById("loi-sdt").style.display = "none";
    document.getElementById("loi-sdt-number").style.display = "none";
    document.getElementById("loi-sdt-10").style.display = "none";

    // Trim() dữ liệu;
    soDienThoai = soDienThoai.trim();

    if(soDienThoai === ""){
        // TODO: Hiển thị lỗi
        document.getElementById("loi-sdt").style.display = "block";
        return false;
    }else if (isNaN(soDienThoai)){
        // TODO: hiển thị lỗi
        document.getElementById("loi-ns-number").style.display = "block";
        return false;
    }else if(soDienThoai.length != 10){        // TODO:
        document.getElementById("loi-sdt-10").style.display = "block";
        return false;
    }else{
        // Năm sinh hợp lệ
        // Ẩn hết thông báo
        document.getElementById("loi-sdt").style.display = "none";
        document.getElementById("loi-sdt-number").style.display = "none";
        document.getElementById("loi-sdt-10").style.display = "none";
        return true;
    }
}