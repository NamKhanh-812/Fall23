let svHang = {
    ten: "Hằng",
    diem: null
}
let svMy = {
    ten: "Mỹ",
    diem: null
}
let svPhuong = {
    ten: "Phương",
    diem: null
}

let arrSV = [svHang, svMy, svPhuong];

for (let sinhVien of arrSV) {
    sinhVien.diem = Number(prompt("Nhập điểm cho sinh viên " + sinhVien.ten));
}

console.log("//Danh sách sinh viên và điểm");
console.log(arrSV);
let tongDiem = 0;
let tenSVTB = [];
let diemMax = 0;

for (let sinhVien of arrSV) {
    if (sinhVien.diem < 5) {
        tenSVTB.push(sinhVien.ten);
    }

    //tổng điểm
    tongDiem += sinhVien.diem;

    // tìm điểm max
    if (sinhVien.diem > diemMax) {
        diemMax = sinhVien.diem;
    }
}
let svDiemMax = [];
for (let sv of arrSV) {
    if (sv.diem === diemMax) {
        svDiemMax.push(sv.ten);
    }
}
console.log("Danh sách sinh viên có điểm dưới trung bình:", tenSVTB.join(", "));

console.log("Tổng điểm: ", tongDiem);

console.log("Sinh viên có điểm cao nhất:",svDiemMax.join(", "));

