function validate(){
    let hoVaTenValue = document.getElementById("hoVaTen").value;
    if(hoVaTenValue == ""){
        document.getElementById("thongBaoTen").style.display = "block";
    }else{
        document.getElementById("thongBaoTen").style.display = "none";
    }
    console.log(hoVaTenValue);

    let namSinhValue = document.getElementById("namSinh").value;
    if(namSinhValue == ""){
        document.getElementById("thongBaoNamSinh").style.display = "block";
    }else{
        document.getElementById("thongBaoNamSinh").style.display = "none";
        if(namSinhValue !== Number(namSinhValue)){
            document.getElementById("thongBaoSoNamSinh").style.display = "block";
        }else if(namSinhValue > 2023){
            document.getElementById("thongBaoSoNamSinh").style.display = "none";
            document.getElementById("thongBaoNamSinhLon").style.display = "block";
        }else{
            document.getElementById("thongBaoSoNamSinh").style.display = "none";
            document.getElementById("thongBaoNamSinhLon").style.display = "none";
        }
    }
    console.log(namSinhValue);

    let sdtValue = document.getElementById("sdt").value;
    if(sdtValue == ""){
        document.getElementById("thongBaoSDT").style.display = "block";
    }else{
        document.getElementById("thongBaoSDT").style.display = "none";
    }
    console.log(sdtValue);

    let nodeGioiTinh = document.getElementsByName("gioiTinh");
    let gioiTinhValue;
    for(let item of nodeGioiTinh){
        if(item.checked == true){
            gioiTinhValue = item.value;
        }
    }
    console.log(gioiTinhValue);
    if(gioiTinhValue == undefined){
        document.getElementById("thongBaoGioiTinh").style.display = "block";
    }else{
        document.getElementById("thongBaoGioiTinh").style.display = "none";
    }
    console.log(gioiTinhValue);

    return false;
}