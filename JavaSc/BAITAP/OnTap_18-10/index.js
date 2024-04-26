function validate(){

    let email = document.getElementById("email").value.trim();
    let vanChuyen = document.getElementsByName("vanChuyen");

    // Gọi hàm

    validateEmail(email);
    validateVanChuyen(vanChuyen);
}

function validateEmail(email) {
    console.log("      Gọi hàm validateEmail()");

    // 1. Khai báo biến

    let nodeTbBatBuoc = document.getElementById("emailTrong");
    let nodeTbDinhDang = document.getElementById("emailDinhDang");

    // Ẩn thông báo
    nodeTbBatBuoc.style.display="none";
    nodeTbDinhDang.style.display="none";

    // Validate bắt buộc

    if(email===""){
        nodeTbBatBuoc.style.display="block";
        return false;
    }

    // Định dạng
    // Phải có dấu "." và không nằm ở cuối cùng
    // Phải có @ và . và không nằm ở đầu tiên
    // Vị trí @ nằm trc "." ít nhất 1 ký tự
    // Nếu "." ở cuối thì báo lỗi
    if(email.lastIndexOf(".")===email.length-1
    || email.indexOf("@")<=0
    || email.indexOf("@")>= email.lastIndexOf(".")-1){
        nodeTbDinhDang.style.display="block";
    }
}


function validateVanChuyen(vanChuyen) {
    // khai báo biến
    let nodeTbBatBuoc = document.getElementById("vanChuyenTrong");

    //
    nodeTbBatBuoc.style.display="none";

    // Kiểm tra bắt buộc
     let valueVanChuyen=""; //Lưu giá trị checked
    for(let node of vanChuyen){
        if(node.checked){
            valueVanChuyen=node.value;
            break;
        }
    }
    if(valueVanChuyen===""){
    nodeTbBatBuoc.style.display="block";
    }
}

function thayDoiPhi(pVanChuyen) {
    console.log("       Hàm phí vận chuyển");
    console.log("Value:",pVanChuyen);
    
    //
    let nodePhi = document.getElementById("phiVanChuyen");
    if(pVanChuyen==='hoatoc'){
        nodePhi.value=5000;
    }
    else if(pVanChuyen='nhanh'){
        nodePhi.value=3000;

    }
    
}