function validate() {
    console.log("Bat dau validate");
    let hovatenValue = document.getElementById("Name").value;
    let namsinhValue = document.getElementById("NamSinh").value;
    let SDTValue = document.getElementById("SdT").value;
    let dsnodeGioiTinh = document.getElementsByName("gioiTinh");

    console.log("hovatenValue", hovatenValue);
    console.log("namsinhValue", namsinhValue);
    console.log("SDTValue", SDTValue);
    console.log("dsnodeGioiTinh", dsnodeGioiTinh);
    validateNameForm(hovatenValue) 
    validateNamSinhForm(namsinhValue);
    validateSDTForm(SDTValue);


}
function validateNameForm(hovatenValue) {
    hovatenValue = hovatenValue.trim();
    if (hovatenValue === "") {
        document.getElementById("loiName").style['display'] = "block";
        return false;
    } else {
        document.getElementById("loiName").style['display'] = "none";
        return true
    }
}
function validateNamSinhForm(namsinhValue) {
    document.getElementById("loiNamSinh").style['display'] = "none";
    document.getElementById("loiNamSinhSo").style['display'] = "none";
    document.getElementById("loiNamSinhLon").style['display'] = "none";


    //1. validate nam sinh
    namsinhValue = namsinhValue.trim();
    if (namsinhValue === "") {
        document.getElementById("loiNamSinh").style['display'] = "block";
        return false;
    } else if (isNaN(namsinhValue)) {
        document.getElementById("loiNamSinhSo").style['display'] = "block";
        return false;

    } else if (Number(namsinhValue) > 2023) {
        document.getElementById("loiNamSinhLon").style['display'] = "block";
        return false;

    } else {
        document.getElementById("loiNamSinh").style['display'] = "none";
        document.getElementById("loiNamSinhSo").style['display'] = "none";
        document.getElementById("loiNamSinhLon").style['display'] = "none";
        return true;
    }
}
function validateSDTForm(SDTValue) {
    document.getElementById("loiSDT").style['display'] = "none";
    document.getElementById("loiSDTSo").style['display'] = "none";
    document.getElementById("loiSDTKT").style['display'] = "none";


    //1. validate nam sinh
    SDTValue = SDTValue.trim();
    if (SDTValue === "") {
        document.getElementById("loiSDT").style.display = "block";
        return false;
    } else if (isNaN(SDTValue)) {
        document.getElementById("loiSDTSo").style.display = "block";
        return false;

    } else if (SDTValue.length !== 10) {
        document.getElementById("loiSDTKT").style.display = "block";
        return false;

    } else {
        document.getElementById("loiSDT").style['display'] = "none";
        document.getElementById("loiSDTSo").style['display'] = "none";
        document.getElementById("loiSDTKT").style['display'] = "none";
        return true;
    }
}